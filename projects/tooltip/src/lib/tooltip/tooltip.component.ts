import { Component, OnInit } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Component({
    selector: 'ps-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
    public constructor(public tooltip: TooltipService) {}
    public ngOnInit(): void {}
}
