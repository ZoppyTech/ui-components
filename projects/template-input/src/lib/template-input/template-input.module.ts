import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { TemplateInputComponent } from './template-input.component';
import { InputModule } from '@ZoppyTech/input';
import { MiniMenuModule } from '@ZoppyTech/mini-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [TemplateInputComponent],
    exports: [TemplateInputComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule, InputModule, MiniMenuModule, FormsModule, ReactiveFormsModule]
})
export class TemplateInputModule {}
