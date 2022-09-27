import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
    imports: [CommonModule, VisualIdentityModule]
})
export class ButtonModule {}
