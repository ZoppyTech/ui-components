import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@lucarrloliveira/icon';
import { CheckboxComponent } from './checkbox.component';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';

@NgModule({
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule]
})
export class CheckboxModule {}
