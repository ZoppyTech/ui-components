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
                name: 'type',
                type: 'string',
                definition: 'Defines button background color',
                defaultValue: 'undefined'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable the button',
                defaultValue: 'false'
            },
            {
                name: 'wide',
                type: 'boolean',
                definition: 'Defines if the button will take 100% width of parent',
                defaultValue: 'false'
            },
            {
                name: 'round',
                type: 'boolean',
                definition: 'Defines if the button will be round',
                defaultValue: 'undefined'
            },
            {
                name: 'loading',
                type: 'boolean',
                definition: 'Disables button and add a loading gif',
                defaultValue: 'false'
            },
            {
                name: 'fixedHeight',
                type: 'boolean',
                definition: 'Set button height to 32px',
                defaultValue: 'true'
            },
            {
                name: 'onClick',
                type: 'function(boolean)',
                definition: 'Callback function whenever button is clicked',
                defaultValue: 'undefined'
            }
        ];
    }
}
