import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'ps-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
    @Input() public placeholder: string = '';
    @Input() public model?: Date | undefined = new Date();
    @Input() public timezone: number = -3;
    @Input() public disabled: boolean = false;

    @Output() public modelChange: EventEmitter<Date | undefined> = new EventEmitter();

    public hover: boolean = false;
    public time: string = '';
    public errors: Array<string> = [];

    public ngOnInit(): void {
        if (!this.model) return;

        const hour: number = this.model.getHours();
        const minute: number = this.model.getMinutes();

        this.time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
    }

    public changed(value: string): void {
        if (!value || value.length !== 4) {
            this.model = undefined;
            this.modelChange.emit(this.model);
        }

        const hour: number = value.includes(':') ? parseInt(value.split(':')[0]) : parseInt(value.substring(0, 2));
        const minute: number = value.includes(':') ? parseInt(value.split(':')[1]) : parseInt(value.substring(2, 4));

        if (hour > 23 || hour < -1) {
            this.errors.push('error');
            return;
        }

        if (minute > 60 || minute < -1) {
            this.errors.push('error');
            return;
        }

        this.time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
        this.model?.setHours(hour, minute);
        this.modelChange.emit(this.model);
    }
}
