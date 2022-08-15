import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    @Input() public enableSearch: boolean = true;
    @Input() public noDataText: string = 'Lista vazia';
    @Input() public searchPlaceholder?: string = 'Pesquisar...';
    @Input() public selectText?: string = 'Selecione aqui...';
    @Input() public items: Array<any> = [];
    @Input() public value: any;
    @Input() public propertyLabel: string = 'label';
    @Input() public propertyValue: any = 'label';
    @Input() public disabled: boolean = false;
    @Input() public errors: Array<string> = [];
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();

    public loaded: boolean = false;
    public searchText: string = '';
    public open: boolean = false;
    public hover: boolean = false;

    public constructor() {}

    public ngOnInit(): void {
        this.init();
    }

    public init(): void {
        setTimeout(() => {
            this.formatItems();
            this.loaded = true;
        });
    }

    public toggleItem(item: any): boolean {
        this.value = item[this.propertyValue];
        this.valueChange.emit(this.value);
        this.toggleOpen();
        return true;
    }

    public searchBarChanged(text: string) {
        text = text.toLowerCase().replace(' ', '');

        this.items = this.items.map((item: any) => {
            item.isHidden = !item[this.propertyValue].toLowerCase().replace(' ', '').includes(text);
            return item;
        });
    }

    public noItemsVisible(): boolean {
        return this.items.filter((item: any) => !item.isHidden).length === 0;
    }

    public toggleOpen() {
        if (this.disabled) this.open = false;
        else this.open = !this.open;
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

    @HostListener('document:click', ['$event']) public onClick() {
        if (!this.hover) this.open = false;
    }
}
