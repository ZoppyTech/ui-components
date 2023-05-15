import { Component, OnInit } from '@angular/core';
import { ToastService } from 'projects/toast/src/lib/toast/toast.service';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-template-input',
    templateUrl: './page-template-input.component.html',
    styleUrls: ['./page-template-input.component.scss']
})
export class PageTemplateInputComponent implements OnInit {
    public properties: Array<Property> = [];

    public bodyText: string = `Ei {{client_first_name}}! Tudo bem?

Sou a Joana, parceira da *{{company_name}}*!

Você ganhou *{{giftback_amount}} de cashback* para uma próxima compra! 😱

Ele pode ser utilizado até o dia {{giftback_expiry_date}} e sua compra mínima deve ser de {{giftback_minimum_purchase_value}}

Para resgatar, basta utilizar o cupom *{{giftback_code}}* na sua próxima compra em nosso site!

Te aguardamos! 😁

Aproveitando, {{client_first_name}}, caso não deseje receber mensagens com descontos personalizados, basta responder "não quero"`;
    public headerText: string = '';
    public headerType: string = 'text';
    public footerText: string = '';
    public ctaLabel: string = '';
    public headerUrl: string = '';
    public headerFile: File | null = null;

    public constructor(private readonly toast: ToastService) {}

    public onFileChange(file: File | undefined) {
        if (!file) {
            this.headerText = '';
            this.headerUrl = '';
            return;
        }

        this.headerText = 'image';
        this.headerType = 'image';
        this.headerUrl = URL.createObjectURL(file);
    }

    public onInvalidFileUpload(): void {
        this.toast.error('Formato de arquivo não permitido', 'Erro!');
    }

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
