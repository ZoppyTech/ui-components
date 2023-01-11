import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    @Input() public enableSearch: boolean = true;
    @Input() public enableAdd: boolean = false;
    @Input() public noDataText: string = 'Lista vazia';
    @Input() public searchPlaceholder?: string = 'Pesquisar...';
    @Input() public selectText?: string = 'Selecione aqui...';
    @Input() public items: Array<any> = [];
    @Input() public value: any;
    @Input() public wide: boolean = false;
    @Input() public propertyLabel: string = 'label';
    @Input() public propertyValue: any = 'label';
    @Input() public disabled: boolean = false;
    @Input() public displayTop: boolean = false;
    @Input() public debounce: number = 400;
    @Input() public errors: Array<string> = [];
    @Output() public valueChange: EventEmitter<any> = new EventEmitter();
    @Output() public onItemAdded: EventEmitter<string> = new EventEmitter();

    public loaded: boolean = false;
    public searchText: string = '';
    public open: boolean = false;
    public hover: boolean = false;

    public constructor() {}

    public ngOnInit(): void {
        this.init();
    }

    public init(): void {
        debugger;
        setTimeout(() => {
            this.formatItems();
            this.loaded = true;
            if (!this.enableSearch) this.enableAdd = false;
            if (this.enableAdd) this.debounce = 0;
        });
    }

    public toggleItem(item: any): boolean {
        debugger;
        this.value = item[this.propertyValue];
        this.valueChange.emit(this.value);
        this.toggleOpen();
        return true;
    }

    public showValue(): string {
        if (!this.value) return '';
        const displayed: any = this.items.find(item => item.value === this.value)?.label ?? '';
        console.log(displayed);
        return displayed;
    }

    public searchBarChanged(text: string) {
        this.searchText = text;
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

    public addItem() {
        setTimeout(() => {
            const newItem: any = {
                [this.propertyLabel]: this.searchText,
                [this.propertyValue]: this.searchText
            };
            this.items.push(newItem);
            this.toggleItem(newItem);
            this.onItemAdded.emit(this.searchText);
            this.searchBarChanged('');
        });
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
