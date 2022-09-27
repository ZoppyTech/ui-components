import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { RadioButtonComponent } from './radio-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [RadioButtonComponent],
    exports: [RadioButtonComponent],
    imports: [CommonModule, VisualIdentityModule, FormsModule]
})
export class RadioButtonModule {}
