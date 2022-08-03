import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-tooltip',
    templateUrl: './page-tooltip.component.html',
    styleUrls: ['./page-tooltip.component.scss']
})
export class PageTooltipComponent implements OnInit {
    public constructor() {}

    public ngOnInit(): void {
        console.log('do nothing');
    }
}
