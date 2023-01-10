import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DateUtil } from './date-util';

@Component({
    selector: 'ps-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
    @Input() public type: DatepickerType = `icon`;
    @Input() public model: Date | undefined = undefined;
    @Input() public hasFooter: boolean = true;
    @Input() public placeholder: string = '';
    @Input() public displayTop: boolean = false;
    @Output() public modelChange: EventEmitter<Date> = new EventEmitter();

    public hover: boolean = false;
    public open: boolean = false;
    public month: number = 0;
    public day: number = 0;
    public year: number = 0;
    public calendarDays: Array<CalendarDay> = [];
    public inputText: string = '';
    public errors: Array<string> = [];

    public constructor() {}

    public ngOnInit() {
        this.initModelStringDate();
        this.initHeaders();
        this.calendarDays = DateUtil.setCalendarDays(this.calendarDays, this.year, this.month);
        this.setInputText();
    }

    private initModelStringDate(): void {
        if (!this.model || typeof this.model !== 'string') return;
        this.model = new Date(this.model as string);
    }

    private initHeaders(): void {
        if (!(this.model instanceof Date) && this.model) {
            this.model = undefined;
            return;
        }
        this.month = this.model ? this.model.getMonth() : new Date().getMonth();
        this.day = this.model ? this.model.getDay() : new Date().getDay();
        this.year = this.model ? this.model.getFullYear() : new Date().getFullYear();
    }

    public getMonthString(): string {
        switch (this.month) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
        }
        return '';
    }

    public changeMonth(month: number): void {
        switch (month) {
            case -1:
                this.month = 11;
                this.year--;
                break;
            case 12:
                this.month = 0;
                this.year++;
                break;
            default:
                this.month = month;
                break;
        }
        this.calendarDays = DateUtil.setCalendarDays(this.calendarDays, this.year, this.month);
    }

    public isSelected(calendarDay: CalendarDay): boolean {
        if (!this.model || !(this.model instanceof Date)) return false;

        return (
            calendarDay.date.getMonth() === this.model.getMonth() &&
            calendarDay.date.getFullYear() === this.model.getFullYear() &&
            calendarDay.date.getDate() === this.model.getDate()
        );
    }

    public selectDate(calendarDay: CalendarDay): void {
        this.model = calendarDay.date;
        if (this.hasFooter) return;
        this.confirmSelectedDate();
    }

    public confirmSelectedDate(): void {
        this.modelChange.emit(this.model);
        this.open = false;
        this.setInputText();
    }

    public setInputText(): void {
        if (!this.model || this.type !== 'input') return;
        this.inputText = DateUtil.formatDate(this.model as Date);
    }

    public cancel(): void {
        setTimeout(() => {
            this.open = false;
            this.model = undefined;
            this.inputText = '';
        });
    }

    public inputTextChanged(date: string): void {
        try {
            const day: number = parseInt(date.substring(0, 2));
            const month: number = parseInt(date.substring(2, 4));
            const year: number = parseInt(date.substring(4, 8));
            this.model = new Date(`${month}/${day}/${year}`);

            if (!DateUtil.isValidDate(this.model)) {
                if (this.model) this.errors.push('invalid date');
            } else {
                this.errors = [];
            }
        } catch (ex) {
            if (this.model) this.errors.push('invalid date');
            this.cancel();
        } finally {
            if (this.model) DateUtil.addHours(this.model, 12);
            this.modelChange.emit(this.model);
        }
    }

    @HostListener('document:click', ['$event']) public onClick() {
        if (!this.hover && this.open) {
            this.hasFooter ? this.cancel() : (this.open = false);
        }
    }
}

type DatepickerType = `icon` | `input`;

export interface CalendarDay {
    currentMonth: boolean;
    day: number;
    date: Date;
}
