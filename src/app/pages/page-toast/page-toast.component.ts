import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-toast',
    templateUrl: './page-toast.component.html',
    styleUrls: ['./page-toast.component.scss']
})
export class PageToastComponent implements OnInit {
    public constructor() {}

    public ngOnInit(): void {
        console.log('do nothing');
    }
}
