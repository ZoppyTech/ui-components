import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-switch',
    templateUrl: './page-switch.component.html',
    styleUrls: ['./page-switch.component.scss']
})
export class PageSwitchComponent implements OnInit {
    public properties: Array<Property> = [];
    public isActive: boolean = false;

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
                name: 'onToggleSwitch',
                type: 'function(active)',
                definition: 'Callback function that returns active value when changed',
                defaultValue: 'undefined'
            }
        ];
    }
}
