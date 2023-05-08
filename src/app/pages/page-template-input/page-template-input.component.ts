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

    public bodyText: string =
        'Olá {{client_first_name}}, tudo bem?\n\nAqui é o {{seller_name}}, da {{company_name}}, estou te chamando pra saber como foi sua experiência com a gente e se posso ajudar em algo! \n            \nUm abraço!';
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
