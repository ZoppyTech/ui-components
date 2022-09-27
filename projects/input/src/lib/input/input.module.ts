import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot(), NgxCurrencyModule, IconModule, VisualIdentityModule],
    declarations: [InputComponent],
    exports: [InputComponent]
})
export class InputModule {}
