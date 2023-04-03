import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-stepper',
    templateUrl: './page-stepper.component.html',
    styleUrls: ['./page-stepper.component.scss']
})
export class PageStepperComponent implements OnInit {
    public properties: Array<Property> = [];
    public items: string[] = ['Sobre você', 'Planos', 'Dados cadastrais', 'Pagamento'];

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'items',
                type: 'string[]',
                definition: 'Stepper items',
                defaultValue: '[]'
            },
            {
                name: 'selected',
                type: 'number',
                definition: 'selected step',
                defaultValue: '0'
            },
            {
                name: 'onChangeSelected',
                type: 'function(selected)',
                definition: 'Callback function that returns selected value when changed',
                defaultValue: 'undefined'
            }
        ];
    }
}
