import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
    @Input() public value: string | number = '';
    @Input() public items: StepperItem[] = [];
    @Output() public onChangeSelected = new EventEmitter();

    public selected: number = 0;

    public constructor() {}

    public ngOnInit(): void {
        if (this.value) {
            const itemSelected: StepperItem | undefined = this.items.find((item: StepperItem) => item.value === this.value);
            if (itemSelected) this.select(itemSelected);
        }
    }

    public checkIsSelected(item: StepperItem): boolean {
        if (!this.value) return false;
        return this.value === item.value;
    }

    public checkIsBefore(item: StepperItem): boolean {
        if (!this.value) return false;
        const selected: number = this.items.findIndex((stepItem: StepperItem) => stepItem.value === this.value);
        const current: number = this.items.findIndex((stepItem: StepperItem) => stepItem.value === item.value);
        return current < selected;
    }

    public select(item: StepperItem): void {
        this.onChangeSelected.emit(item.value);
        this.selected = this.items.findIndex((stepperItem: StepperItem) => item.value === stepperItem.value);
    }
}

export interface StepperItem {
    label: string;
    value: string | number;
    index: number;
}
