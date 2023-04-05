import { Component } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-selector',
    templateUrl: './page-selector.component.html',
    styleUrls: ['./page-selector.component.scss']
})
export class PageSelectorComponent {
    public properties: Array<Property> = [];
    public items: any[] = [
        { icon: 'icon-add_shopping_cart', value: '1', label: 'Entender mais sobre os padrões de consumo dos meus clientes' },
        { icon: 'icon-follow', value: '2', label: 'Acompanhar melhor os meus vendedores' },
        { icon: 'icon-giftback', value: '3', label: 'Programa de Giftback' },
        { icon: 'icon-handshake', value: '4', label: 'Gerencia melhor os relacionamento da marca.' },
        { icon: 'icon-mix_products', value: '5', label: 'Melhorar meu mix de produtos.' },
        { icon: 'icon-time_count', value: '6', label: 'Diminuir tempo de recompra dos meus clientes.' }
    ];

    public value: string = '3';

    public constructor() {}

    public ngOnInit(): void {
        this.properties = [
            {
                name: 'value',
                type: 'any',
                definition: 'Value',
                defaultValue: 'null'
            },
            {
                name: 'items',
                type: 'any[]',
                definition: 'Items',
                defaultValue: '[]'
            },
            {
                name: 'propertyLabel',
                type: 'string',
                definition: 'propertyLabel',
                defaultValue: 'label'
            },
            {
                name: 'propertyValue',
                type: 'string',
                definition: 'propertyValue',
                defaultValue: 'label'
            },
            {
                name: 'propertyIcon',
                type: 'string',
                definition: 'propertyIcon',
                defaultValue: 'icon'
            }
        ];
    }
}
