import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@ZoppyTech/icon';
import { CheckboxComponent } from './checkbox.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule]
})
export class CheckboxModule {}
