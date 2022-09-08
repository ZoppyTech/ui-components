import { CalendarDay } from './datepicker.component';

export class DateUtil {
    public static addDays(date: Date, days: number) {
        const response: Date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
        return response;
    }

    public static setCalendarDays(calendarDays: CalendarDay[], year: number, month: number): CalendarDay[] {
        const initialMonthDate = new Date(year, month, 0);
        const lastMonthDate: Date = new Date(year, month + 1, 0);
        const lastMonthDay: number = lastMonthDate.getDate();
        calendarDays = [];

        for (let i = 0; i <= initialMonthDate.getDay(); i++) {
            const date = DateUtil.addDays(initialMonthDate, -(initialMonthDate.getDay() - i));
            calendarDays.push({
                currentMonth: false,
                day: date.getDate(),
                date: date
            });
        }

        for (let i = 1; i <= lastMonthDay; i++) {
            const date = DateUtil.addDays(initialMonthDate, i);
            calendarDays.push({
                currentMonth: true,
                day: date.getDate(),
                date: date
            });
        }

        if (lastMonthDate.getDay() === 7) return calendarDays;

        for (let i = lastMonthDate.getDay() + 1; i < 7; i++) {
            const date = DateUtil.addDays(lastMonthDate, i - lastMonthDate.getDay());
            calendarDays.push({
                currentMonth: false,
                day: date.getDate(),
                date: date
            });
        }
        return calendarDays;
    }

    public static formatDate(date: Date) {
        const day = date.getDate().toString();
        const dayF = day.length === 1 ? '0' + day : day;
        const month = (date.getMonth() + 1).toString();
        const monthF = month.length === 1 ? '0' + month : month;
        const yearF = date.getFullYear();
        return dayF + '/' + monthF + '/' + yearF;
    }

    public static isValidDate(date: Date) {
        return !isNaN(date.getTime());
    }

    public static addHours(date: Date, hours: number) {
        date.setTime(date.getTime() + hours * 60 * 60 * 1000);
        return date;
    }
}
