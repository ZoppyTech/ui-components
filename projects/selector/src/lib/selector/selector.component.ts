import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
    @Input() public value: any;
    @Input() public items: Array<any> = [];
    @Input() public propertyLabel: string = 'label';
    @Input() public propertyValue: any = 'label';
    @Input() public propertyIcon: any = 'icon';
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();

    public ngOnInit(): void {
        this.init();
    }

    public init(): void {
        setTimeout(() => {
            this.formatItems();
        });
    }

    public select(item: any): void {
        this.value = item[this.propertyValue];
        this.valueChange.emit(this.value);
    }

    private formatItems(): void {
        if (this.items[0] && typeof this.items[0] !== 'object') {
            this.propertyLabel = 'label';
            this.propertyValue = 'label';
            this.items = this.items.map((item: any) => {
                return {
                    label: item
                };
            });
        }
    }
}
