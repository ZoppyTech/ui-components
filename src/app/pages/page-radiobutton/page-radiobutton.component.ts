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
