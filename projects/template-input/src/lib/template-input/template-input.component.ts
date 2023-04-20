import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ps-template-input',
    templateUrl: './template-input.component.html',
    styleUrls: ['./template-input.component.scss']
})
export class TemplateInputComponent {
    @Input() public ngModel: any = '';
    @Input() public disabled: boolean = false;
    @Input() public placeholder: string = '';

    @Output() public ngModelChange = new EventEmitter<any>();
    @Output() public onFocus = new EventEmitter();
    @Output() public onBlur = new EventEmitter();

    public focus: boolean = false;
    public hover: boolean = false;
    public open: boolean = false;
    public tabSelected: number = 0;

    public tabs: Array<Tab> = [
        {
            label: 'Cliente',
            icon: 'icon-face'
        },
        {
            label: 'Giftback',
            icon: 'icon-giftback'
        },
        {
            label: 'NPS',
            icon: 'icon-mood'
        },
        {
            label: 'Empresas',
            icon: 'icon-corporate_fare'
        }
    ];

    public parameters: TemplateParameter[] = [
        {
            label: 'Primeiro Nome',
            value: '{{client_first_name}}',
            tab: 0
        },
        {
            label: 'Último Nome',
            value: '{{client_last_name}}',
            tab: 0
        },
        {
            label: 'Idade',
            value: '{{age}}',
            tab: 0
        },
        {
            label: 'Dia do Aniversário',
            value: '{{birthday_day}}',
            tab: 0
        },
        {
            label: 'Mês do Aniversário',
            value: '{{birthday_month}}',
            tab: 0
        },
        {
            label: 'Data da Última Compra',
            value: '{{last_purchase_date}}',
            tab: 0
        },
        {
            label: 'Lista dos Produtos da Última Compra',
            value: '{{product_list}}',
            tab: 0
        },

        {
            label: 'Código do Giftback',
            value: '{{nps_link}}',
            tab: 1
        },
        {
            label: 'Valor do Giftback',
            value: '{{nps_product_rating}}',
            tab: 1
        },
        {
            label: 'Data de Expiração do Giftback',
            value: '{{nps_rating}}',
            tab: 1
        },
        {
            label: 'Valor Mínimo da compra do Giftback',
            value: '{{nps_service_rating}}',
            tab: 1
        },
        {
            label: 'Valor Percentual do Giftback',
            value: '{{giftback_percent_value}}',
            tab: 1
        },

        {
            label: 'Link do NPS',
            value: '{{nps_link}}',
            tab: 2
        },
        {
            label: 'NPS de Produto',
            value: '{{nps_product_rating}}',
            tab: 2
        },
        {
            label: 'NPS Geral',
            value: '{{nps_rating}}',
            tab: 2
        },
        {
            label: 'NPS de Serviço',
            value: '{{nps_service_rating}}',
            tab: 2
        },

        {
            label: 'Nome da Empresa',
            value: '{{company_name}}',
            tab: 3
        },
        {
            label: 'Nome do Vendedor Responsável',
            value: '{{seller_name}}',
            tab: 3
        },
        {
            label: 'Link da sua Loja Virtual',
            value: '{{store_url}}',
            tab: 3
        }
    ];

    public onInputBlur() {
        if (this.focus) {
            this.onBlur.emit();
            this.focus = false;
        }
    }

    public onInputFocus() {
        if (this.hover && !this.focus) {
            this.onFocus.emit();
            this.focus = true;
        }
    }

    public onModelChange(): void {
        if (this.disabled) return;
        this.ngModelChange.emit(this.ngModel);
    }

    public toggleOpen(): void {
        if (this.disabled) return;
        this.open = !this.open;
    }

    public clickBg(): void {
        if (this.hover) return;
        this.open = false;
    }

    public addParameter(parameter: TemplateParameter): void {
        this.ngModel += parameter.value;
        this.ngModelChange.emit(this.ngModel);
        this.open = false;
    }
}

interface Tab {
    label: string;
    icon: string;
}

interface TemplateParameter {
    label: string;
    value: string;
    tab: number;
}
