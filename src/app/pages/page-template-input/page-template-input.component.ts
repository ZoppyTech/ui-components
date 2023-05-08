import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-template-input',
    templateUrl: './page-template-input.component.html',
    styleUrls: ['./page-template-input.component.scss']
})
export class PageTemplateInputComponent implements OnInit {
    public properties: Array<Property> = [];

    public bodyText: string =
        'Olá {{client_first_name}}, tudo bem?\n\nAqui é o {{seller_name}}, da {{company_name}}, estou te chamando pra saber como foi sua experiência com a gente e se posso ajudar em algo! \n            \nUm abraço!';
    public headerText: string = 'image';
    public headerType: string = 'image';
    public footerText: string = '';
    public ctaLabel: string = '';
    public headerUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/PNG_Test.png/477px-PNG_Test.png?20230418144955';

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
