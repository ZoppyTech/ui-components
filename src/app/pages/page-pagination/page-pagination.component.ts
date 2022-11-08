import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-pagination',
    templateUrl: './page-pagination.component.html',
    styleUrls: ['./page-pagination.component.scss']
})
export class PagePaginationComponent implements OnInit {
    public properties: Array<Property> = [];

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'page',
                type: 'integer',
                definition: 'Current Page',
                defaultValue: '1'
            },
            {
                name: 'totalPages',
                type: 'integer',
                definition: 'Number of pages',
                defaultValue: '1'
            },
            {
                name: 'onPageChanged',
                type: 'Event',
                definition: 'Callback when Page changes',
                defaultValue: 'null'
            }
        ];
    }
}
