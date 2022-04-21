import { Component, OnInit } from '@angular/core';
import { VisualIdentityService } from 'projects/visual-identity/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public loaded: boolean = false;
    public components: Array<string> = ['button', 'checkbox', 'searchbar', 'radiobutton', 'multiselect'];

    public constructor(public visualIdentityService: VisualIdentityService) {}

    public ngOnInit(): void {
        this.visualIdentityService.setVariables('#BF2009', '#77c2f5', '#EFC100', '#E82110', '#48AC68', '#1B6AC9');
    }
    public title: string = 'ui-components';
}
