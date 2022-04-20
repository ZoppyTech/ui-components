import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-utilization',
    templateUrl: './utilization.component.html',
    styleUrls: ['./utilization.component.scss']
})
export class UtilizationComponent {
    @Input() public properties: Array<Property> = [];

    public constructor() {}
}

export class Property {
    public name: string = '';
    public type: string = '';
    public definition: string = '';
    public defaultValue?: any;
}
