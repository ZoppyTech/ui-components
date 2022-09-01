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
    @Output() public modelChange: EventEmitter<Date> = new EventEmitter();

    public hover: boolean = false;
    public open: boolean = false;
    public month: number = 0;
    public day: number = 0;
    public year: number = 0;
    public calendarDays: Array<CalendarDay> = [];

    public constructor() {}

    public ngOnInit() {
        this.initHeaders();
        this.calendarDays = DateUtil.setCalendarDays(this.calendarDays, this.year, this.month);
    }

    private initHeaders(): void {
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
            case 0:
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
        if (!this.model) return false;

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
    }

    public cancel(): void {
        this.open = false;
        this.model = undefined;
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
