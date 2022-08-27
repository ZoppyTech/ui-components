import { Component, OnInit } from '@angular/core';
import { ConfirmActionService } from 'projects/confirm-action/src/lib/confirm-action/confirm-action.service';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-confirm-action',
    templateUrl: './page-confirm-action.component.html',
    styleUrls: ['./page-confirm-action.component.scss']
})
export class PageConfirmActionComponent implements OnInit {
    public properties: Array<Property> = [];

    public constructor(public confirmAction: ConfirmActionService) {}

    public ngOnInit(): void {
        console.log('do nothing');
    }

    public open(): void {
        this.confirmAction.open(`Your title`, `Are you sure you want to do this?`, (result: boolean) => {
            debugger;
            if (result) console.log(`clicked on yes`);
            else console.log(`clicked on no`);
        });
    }
}
