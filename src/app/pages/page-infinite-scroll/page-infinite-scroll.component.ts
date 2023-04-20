import { Component } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-infinite-scroll',
    templateUrl: './page-infinite-scroll.component.html',
    styleUrls: ['./page-infinite-scroll.component.scss']
})
export class PageInfiniteScrollComponent {
    public properties: Array<Property> = [];
}
