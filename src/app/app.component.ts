import { Component, OnInit } from '@angular/core';
import { VisualIdentityService, Pallete } from '@lucarrloliveira/visual-identity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public loaded: boolean = false;
    public components: Array<string> = [
        'button',
        'checkbox',
        'searchbar',
        'radiobutton',
        'multiselect',
        'toast',
        'tooltip',
        'input',
        'confirmaction'
    ];

    public constructor(public visualIdentityService: VisualIdentityService) {}

    public ngOnInit(): void {
        this.setBaseColorPallete();
    }
    public title: string = 'ui-components';

    private setBaseColorPallete(): void {
        const neutral: Pallete = new Pallete('#363636', '#4b4b4b', '#727272', '#9b9b9b', '#c6c6c6', '#dddddd', '#f3f3f3', '#ffffff');
        const primary: Pallete = new Pallete('#13357b', '#2f4790', '#4759a5', '#5d6dbb', '#7381d2', '#a0aaff', '#b6c0ff', '#cdd6ff');
        const secondary: Pallete = new Pallete('#4e14d8', '#6a2eef', '#8344ff', '#9d5aff', '#b670ff', '#cf85ff', '#e79bff', '#ffb2ff');
        const tertiary: Pallete = new Pallete('#004374', '#00568e', '#0069a4', '#007dba', '#0092d0', '#00a7e7', '#49d3ff', '#68e9ff');
        const quaternary: Pallete = new Pallete('#00493b', '#005d4d', '#007260', '#008774', '#009d88', '#00b39d', '#00cab3', '#00e0c9');

        const negative: string = '#eb0000';
        const warning: string = '#ffad4e';
        const info: string = '#4c7eff';
        const success: string = '#30e1a1';

        this.visualIdentityService.setVariables(neutral, primary, secondary, tertiary, quaternary, success, info, warning, negative);
    }
}
