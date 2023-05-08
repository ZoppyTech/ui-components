import { Component } from '@angular/core';
import { Extension } from 'projects/input-file/src/lib/input-file/input-file.component';
import { Property } from 'src/app/components/utilization/utilization.component';
import { ToastService } from 'projects/toast/src/lib/toast/toast.service';

@Component({
    selector: 'app-page-input-file',
    templateUrl: './page-input-file.component.html',
    styleUrls: ['./page-input-file.component.scss']
})
export class PageInputFileComponent {
    public properties: Array<Property> = [];

    public title: string = 'Cartão CNPJ ou Contrato Social';
    public extensions: Extension[] = [`.jpg`, '.jpeg', '.png'];

    public constructor(private readonly toast: ToastService) {}

    public onInvalidFileUpload(): void {
        this.toast.error('Formato de arquivo não permitido', 'Erro!');
    }
}
