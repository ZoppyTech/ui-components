import { AfterViewChecked, AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ps-multiselect',
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements AfterViewInit {
    @Input() public setting: MultiSelectConfigSetting = new MultiSelectConfigSetting();
    @Input() public textTranslation: MultiSelectConfigText = new MultiSelectConfigText();
    @Input() public items: Array<any> = [];
    @Input() public values: Array<any> = [];
    @Input() public propertyLabel: string = 'label';
    @Input() public propertyValue: any = 'label';
    @Output() public onChange?: EventEmitter<any> = undefined;
    @Output() public valuesChange: EventEmitter<any> = new EventEmitter();

    public loaded: boolean = false;
    public searchText: string = '';
    public open: boolean = false;
    public hover: boolean = false;

    public constructor() {}

    public ngAfterViewInit(): void {
        this.init();
    }

    public init(): void {
        this.formatItems();
        setTimeout(() => {
            this.loaded = true;
        });
    }

    public checkItemActive(item: any): boolean {
        return !!this.values.find(value => value === item[this.propertyValue]);
    }

    public toggleItem(active: boolean, item: any): void {
        this.values = this.items.filter((item: any) => this.setItemSelected(item)).map((item: any) => item[this.propertyValue]);
        this.valuesChange.emit(this.values);
        this.onChange?.emit(this.values);
    }

    public setItemSelected(item: any) : boolean {
      return this.values.find((value: any) => value === item[this.propertyValue]);
    }

    public setValueSelectedLabel(): string {
        const countSelected: number = this.items.filter((item: any) => this.setItemSelected(item))?.length;

        if (countSelected > 1) return countSelected + ' Selected';
        const itemSelected = this.items.find((item: any) => this.setItemSelected(item));
        if (itemSelected && typeof itemSelected === 'object') return itemSelected[this.propertyLabel];
        return this.textTranslation.selectText as string;
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

export class MultiSelectConfig {
    setting?: MultiSelectConfigSetting;
    text?: MultiSelectConfigText;
}

export class MultiSelectConfigSetting {
    public multiple?: boolean = true;
    public checkbox?: boolean = true;
    public selectAll?: boolean = true;
    public enableSearch?: boolean = true;
    public maxWordLength?: number = 255;
}

export class MultiSelectConfigText {
    public noDataText: string = 'No Data';
    public selectText?: string = 'Select';
    public selectedText?: string = 'Selected';
    public selectAllText: string = 'Select All';
    public selectedAllText?: string = 'Selected All';
    public searchPlaceholder?: string = 'Search';
}
