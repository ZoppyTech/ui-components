import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-multiselect',
    templateUrl: './page-multiselect.component.html',
    styleUrls: ['./page-multiselect.component.scss']
})
export class PageMultiSelectComponent implements OnInit {
    public properties: Array<Property> = [];
    public itemsPlain: any = ['Banana', 'Apple', 'Grape', 'Watermelon', 'Pineapple', 'Peach', 'Strawberry', 'Blueberry'];

    public initialValues: any = ['Watermelon', 'Peach'];

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
