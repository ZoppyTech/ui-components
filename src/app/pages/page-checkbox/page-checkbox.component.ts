import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-checkbox',
    templateUrl: './page-checkbox.component.html',
    styleUrls: ['./page-checkbox.component.scss']
})
export class PageCheckboxComponent implements OnInit {
    public properties: Array<Property> = [];

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'active',
                type: 'boolean',
                definition: 'Defines if checkbox is checked or not, this property is two-way binding',
                defaultValue: 'false'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable the button',
                defaultValue: 'false'
            },
            {
                name: 'onToggleCheckbox',
                type: 'function(active)',
                definition: 'Callback function that returns active value when changed',
                defaultValue: 'undefined'
            },
            {
                name: 'onFocus',
                type: 'function()',
                definition: 'Callback function whenever checkbox is focused',
                defaultValue: 'undefined'
            },
            {
                name: 'onBlur',
                type: 'function()',
                definition: 'Callback function whenever checkbox is blur',
                defaultValue: 'undefined'
            }
        ];
    }
}
