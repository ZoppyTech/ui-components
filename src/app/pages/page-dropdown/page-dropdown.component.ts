import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-dropdown',
    templateUrl: './page-dropdown.component.html',
    styleUrls: ['./page-dropdown.component.scss']
})
export class PageDropdownComponent implements OnInit {
    public properties: Array<Property> = [
        {
            name: 'enableSearch',
            type: 'boolean',
            definition: 'enable searchbar',
            defaultValue: 'true'
        },
        {
            name: 'selectAll',
            type: 'boolean',
            definition: 'enable selectAll button',
            defaultValue: 'true'
        },
        {
            name: 'noDataText',
            type: 'string',
            definition: 'Placeholder text for no data',
            defaultValue: 'Lista vazia'
        },
        {
            name: 'selectText',
            type: 'string',
            definition: 'Select Item text',
            defaultValue: 'Selecione...'
        },
        {
            name: 'selectAllText',
            type: 'string',
            definition: 'Texto do checkbox selecionar todos',
            defaultValue: 'Selecionar todos'
        },
        {
            name: 'searchPlaceholder',
            type: 'string',
            definition: 'Texto da searchbar',
            defaultValue: 'Pesquisar...'
        },
        {
            name: 'items',
            type: 'Array<any>',
            definition: 'Items do multiSelector',
            defaultValue: '[]'
        },
        {
            name: 'values',
            type: 'Array<any>',
            definition: 'Items selecionados do multiSelector',
            defaultValue: '[]'
        },
        {
            name: 'propertyLabel',
            type: 'string',
            definition: 'Propriedade dos items que será exibida no campo',
            defaultValue: 'label'
        },
        {
            name: 'propertyValue',
            type: 'any',
            definition: 'Propriedade que será usada como valor do item',
            defaultValue: 'label'
        },
        {
            name: 'disabled',
            type: 'boolean',
            definition: 'Desabilitar o componente',
            defaultValue: 'false'
        }
    ];
    public itemsPlain: any = ['Banana', 'Apple', 'Grape', 'Watermelon', 'Pineapple', 'Peach', 'Strawberry', 'Blueberry'];
    public items: any = [
        { value: 'Banana', label: 'BananaLabel' },
        { value: 'Apple', label: 'AppleLabel' },
        { value: 'Grape', label: 'GrapeLabel' },
        { value: 'Watermelon', label: 'WatermelonLabel' },
        { value: 'Pineapple', label: 'PineappleLabel' },
        { value: 'Peach', label: 'PeachLabel' },
        { value: 'Strawberry', label: 'StrawberryLabel' },
        { value: 'Blueberry', label: 'BlueberryLabel' }
    ];
    public booleanItems: any = [
        { value: true, label: 'Verdadeiro' },
        { value: false, label: 'Falso' }
    ];
    public initialValue: any = 'Watermelon';
    public initialBooleanValue: any = false;
    public value: any = 'Peach';

    public emptyItemsPlain: any = [];
    public emptyInitialValues: any = [];

    public constructor() {}

    public ngOnInit(): void {}

    public searchTextChange(text: string) {
        this.items = [
            { value: 'Banana', label: 'BananaLabel' },
            { value: 'Apple', label: 'AppleLabel' }
        ];
    }
}
