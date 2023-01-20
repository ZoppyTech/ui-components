import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-searchbar',
    templateUrl: './page-searchbar.component.html',
    styleUrls: ['./page-searchbar.component.scss']
})
export class PageSearchbarComponent implements OnInit {
    public properties: Array<Property> = [];

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'text',
                type: 'string',
                definition: 'Searchbar text',
                defaultValue: '""'
            },
            {
                name: 'disabled',
                type: 'boolean',
                definition: 'Disable searchbar',
                defaultValue: 'false'
            },
            {
                name: 'placeholder',
                type: 'string',
                definition: 'Placeholder value',
                defaultValue: '""'
            },
            {
                name: 'onChanged',
                type: 'function(string)',
                definition: 'Callback function whenever search text changes',
                defaultValue: 'undefined'
            }
        ];
    }

    public searchBarTextChanged(text: string): void {
        debugger;
        if (!text) return;
        alert('Search bar text changed to: ' + text);
    }
}
