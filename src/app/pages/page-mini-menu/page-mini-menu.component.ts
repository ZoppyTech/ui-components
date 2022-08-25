import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-mini-menu',
    templateUrl: './page-mini-menu.component.html',
    styleUrls: ['./page-mini-menu.component.scss']
})
export class PageMiniMenuComponent implements OnInit {
    public properties: Array<Property> = [];
    public isActive: boolean = false;

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'isOpen',
                type: 'boolean',
                definition: 'Defines if menu is opened or closed',
                defaultValue: 'false'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable the mini menu',
                defaultValue: 'false'
            },
            {
                name: 'icon',
                type: 'string',
                definition: 'icon displayed on mini menu',
                defaultValue: 'undefined'
            },
            {
                name: 'onMenuOpened',
                type: 'function()',
                definition: 'Callback function whenever menu is opened',
                defaultValue: 'undefined'
            },
            {
                name: 'onMenuClosed',
                type: 'function()',
                definition: 'Callback function whenever menu is closed',
                defaultValue: 'undefined'
            }
        ];
    }
}
