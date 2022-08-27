import { Component, OnInit } from '@angular/core';
import { ConfirmActionService } from './confirm-action.service';

@Component({
    selector: 'ps-confirm-action',
    templateUrl: './confirm-action.component.html',
    styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionComponent implements OnInit {
    constructor(public confirmAction: ConfirmActionService) {}

    ngOnInit(): void {}
}
