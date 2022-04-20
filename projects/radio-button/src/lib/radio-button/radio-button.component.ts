import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
    @Input() public items: Array<any> = [];
    @Input() public value: any = undefined;
    @Input() public disabled: boolean = false;
    @Input() public propertyLabel: string = '';
    @Input() public propertyValue: any = undefined;
    @Input() public vertical: boolean = true;

    @Output() public valueChange: EventEmitter<any> = new EventEmitter();

    public focused: boolean = false;
    public name: string = this.createGuid();
    public loaded: boolean = false;
    public itemsAreObjects: boolean = false;

    public constructor() {}

    ngOnInit(): void {
        this.itemsAreObjects = this.setIfItemsAreObjects();
        this.loaded = true;
    }

    public createGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string) {
            const r: number = (Math.random() * 16) | 0,
                v: number = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    public onToggleRadioButton(value: any): any {
      debugger;
      this.value = value;
      this.valueChange.emit(value);
    }

    private setIfItemsAreObjects(): boolean {
        return this.items[0] && typeof this.items[0] === 'object' && this.propertyLabel && this.propertyValue;
    }
}
