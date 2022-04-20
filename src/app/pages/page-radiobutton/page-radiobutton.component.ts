import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-radiobutton',
    templateUrl: './page-radiobutton.component.html',
    styleUrls: ['./page-radiobutton.component.scss']
})
export class PageRadiobuttonComponent implements OnInit {
    public properties: Array<Property> = [];

    public itemsObj: any = [
        {
            name: 'Item 1',
            value: 1
        },
        {
            name: 'Item 2',
            value: 2
        },
        {
            name: 'Item 3',
            value: 3
        },
        {
            name: 'Item 4',
            value: 4
        }
    ];

    public items: any = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    public initialValue: any = {
        name: 'Item 3',
        value: 'Item 3'
    };

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'items',
                type: 'Array<any>',
                definition: 'Radio button items, can be a list of objects or a list of string | number',
                defaultValue: '[]'
            },
            {
                name: 'value',
                type: 'any',
                definition: 'Value selected for radio button',
                defaultValue: 'undefined'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable the component',
                defaultValue: 'false'
            },
            {
                name: 'propertyLabel',
                type: 'string',
                definition: 'If list items are objects, this is the property that will be displayed on text of radio buttom item',
                defaultValue: '""'
            },
            {
                name: 'propertyValue',
                type: 'any',
                definition: 'If list items are objects, this is the property that will map to radio button value',
                defaultValue: 'undefined'
            },
            {
                name: 'vertical',
                type: 'boolean',
                definition: 'Define if items are vertial or horizontal',
                defaultValue: 'true'
            },
            {
                name: 'valueChange',
                type: 'function(any)',
                definition: 'Callback function whenever radio button value changes',
                defaultValue: 'undefined'
            }
        ];
    }
}
