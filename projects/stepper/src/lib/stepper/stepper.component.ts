import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
    @Input() public selected: number = 0;
    @Input() public items: string[] = [];
    @Output() public onChangeSelected = new EventEmitter();

    public constructor() {}

    public ngOnInit(): void {}

    public select(index: number): void {
        this.onChangeSelected.emit(index);
    }
}
