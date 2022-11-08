import { Component, OnInit } from '@angular/core';
import { VisualIdentityService, Pallete } from '@ZoppyTech/visual-identity';
import { ConfirmActionService } from 'projects/confirm-action/src/lib/confirm-action/confirm-action.service';
import { ToastService } from 'projects/toast/src/lib/toast/toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public loaded: boolean = false;
    public open: boolean = false;
    public components: Array<Item> = [
        {
            route: 'button',
            label: 'Button'
        },
        {
            route: 'checkbox',
            label: 'Checkbox'
        },
        {
            route: 'searchbar',
            label: 'Search Bar'
        },
        {
            route: 'radiobutton',
            label: 'Radio Button'
        },
        {
            route: 'multiselect',
            label: 'Multi Select'
        },
        {
            route: 'toast',
            label: 'Toast Message'
        },
        {
            route: 'tooltip',
            label: 'Tooltip'
        },
        {
            route: 'input',
            label: 'Input'
        },
        {
            route: 'switch',
            label: 'Switch'
        },
        {
            route: 'dropdown',
            label: 'Dropdown'
        },
        {
            route: `contact`,
            label: 'Show Contact Information'
        },
        {
            route: `datepicker`,
            label: 'Datepicker'
        },
        {
            route: `mini-menu`,
            label: 'Mini Menu'
        },
        {
            route: `confirm-action`,
            label: 'Confirm Action'
        },
        {
            route: `pagination`,
            label: 'Pagination'
        }
    ];

    public constructor(
        public visualIdentityService: VisualIdentityService,
        public toast: ToastService,
        public confirmAction: ConfirmActionService
    ) {}

    public ngOnInit(): void {
        this.setBaseColorPallete();
    }
    public title: string = 'ui-components';

    private setBaseColorPallete(): void {
        const neutral: Pallete = new Pallete(
            '#363636',
            '#4b4b4b',
            '#727272',
            '#9b9b9b',
            '#c6c6c6',
            '#dddddd',
            '#f3f3f3',
            '#ffffff',
            '#ffffff'
        );
        const primary: Pallete = new Pallete(
            '#13357b',
            '#2f4790',
            '#4759a5',
            '#5d6dbb',
            '#7381d2',
            '#a0aaff',
            '#b6c0ff',
            '#cdd6ff',
            '#002e73'
        );
        const secondary: Pallete = new Pallete(
            '#4e14d8',
            '#6a2eef',
            '#8344ff',
            '#9d5aff',
            '#b670ff',
            '#cf85ff',
            '#e79bff',
            '#ffb2ff',
            '#7b3dff'
        );
        const tertiary: Pallete = new Pallete(
            '#004374',
            '#00568e',
            '#0069a4',
            '#007dba',
            '#0092d0',
            '#00a7e7',
            '#49d3ff',
            '#68e9ff',
            '#1fbeff'
        );
        const quaternary: Pallete = new Pallete(
            '#00493b',
            '#005d4d',
            '#007260',
            '#008774',
            '#009d88',
            '#00b39d',
            '#00cab3',
            '#00e0c9',
            '#00ffe6'
        );

        const negative: string = '#eb0000';
        const warning: string = '#ffad4e';
        const info: string = '#4c7eff';
        const success: string = '#30e1a1';

        this.visualIdentityService.setVariables(neutral, primary, secondary, tertiary, quaternary, success, info, warning, negative);
    }
}

interface Item {
    route: string;
    label: string;
}
