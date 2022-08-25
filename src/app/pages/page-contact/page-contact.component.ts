import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-contact',
    templateUrl: './page-contact.component.html',
    styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
    public properties: Array<Property> = [];
    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'name',
                type: 'string',
                definition: 'Contact name',
                defaultValue: ''
            },
            {
                name: 'email',
                type: 'string',
                definition: 'Contact email',
                defaultValue: ''
            },
            {
                name: 'tooltip',
                type: 'boolean',
                definition: 'Show contact tooltip',
                defaultValue: true
            }
        ];
    }
}
