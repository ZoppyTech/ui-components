import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-input',
    templateUrl: './page-input.component.html',
    styleUrls: ['./page-input.component.scss']
})
export class PageInputComponent implements OnInit {
    public constructor() {}

    public ngOnInit(): void {
        console.log('do nothing');
    }
}
