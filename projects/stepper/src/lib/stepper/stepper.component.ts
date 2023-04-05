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
