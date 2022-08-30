import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
    @Input() public type: DatepickerType = `icon`;
    @Input() public model: Date | undefined = undefined;
    @Output() public modelChange: EventEmitter<Date> = new EventEmitter();

    public hover: boolean = false;
    public open: boolean = false;
    public month: number = 0;
    public day: number = 0;
    public year: number = 0;
    public calendarDays: Array<CalendarDay> = [];

    constructor() {}

    ngOnInit() {
        this.initHeaders();
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
                this.month = 12;
                this.year--;
                break;
            case 13:
                this.month = 1;
                this.year++;
                break;
            default:
                this.month = month;
                break;
        }
        this.setCalendarDays();
    }

    public setCalendarDays(): void {
        const initialMonthDate = new Date(this.year, this.month, this.day + 1);
        const lastMonthDate = new Date(this.year, this.month + 1, 0);
        console.log('initial', initialMonthDate);
        console.log(`last`, lastMonthDate);

        console.log(initialMonthDate.getDay());
        console.log(lastMonthDate.getDay());

        for (let i = 1; i <= initialMonthDate.getDay(); i++) {
            const date = initialMonthDate.setDate(initialMonthDate.getDate() + i);
            console.log(date);
            this.calendarDays.push({
                currentMonth: false,
                day: date
            });
        }
    }
}

type DatepickerType = `icon` | `input`;

interface CalendarDay {
    currentMonth: boolean;
    day: number;
}
