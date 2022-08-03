import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
    @Input() public enableSearch: boolean = true;
    @Input() public selectAll: boolean = true;
    @Input() public noDataText: string = 'Lista vazia';
    @Input() public selectText?: string = 'Selecione...';
    @Input() public selectAllText: string = 'Selecionar todos';
    @Input() public searchPlaceholder?: string = 'Pesquisar...';
    @Input() public items: Array<any> = [];
    @Input() public values: Array<any> = [];
    @Input() public propertyLabel: string = 'label';
    @Input() public propertyValue: any = 'label';
    @Input() public disabled: boolean = false;
    @Output() public valuesChange: EventEmitter<any> = new EventEmitter();

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

    public checkItemActive(item: any): boolean {
        return !!this.values.find(value => value === item[this.propertyValue]);
    }

    public toggleItem(active: boolean, item: any): boolean {
        if (active) this.values.push(item[this.propertyValue]);
        else this.values = this.values.filter((value: any) => value !== item[this.propertyValue]);
        this.values = this.items.filter((item: any) => this.setItemSelected(item)).map((item: any) => item[this.propertyValue]);
        this.valuesChange.emit(this.values);
        return true;
    }

    public setItemSelected(item: any): boolean {
        return this.values.find((value: any) => value === item[this.propertyValue]);
    }

    public setValueSelectedLabel(): string {
        const countSelected: number = this.items.filter((item: any) => this.setItemSelected(item))?.length;

        if (countSelected > 1) return countSelected + ' Selected';
        const itemSelected = this.items.find((item: any) => this.setItemSelected(item));
        if (itemSelected && typeof itemSelected === 'object') return itemSelected[this.propertyLabel];
        return this.selectText as string;
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

    public toggleSelectAll(active: boolean): void {
        this.values = active ? this.items.map((item: any) => item[this.propertyValue]) : [];
        this.valuesChange.emit(this.values);
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
