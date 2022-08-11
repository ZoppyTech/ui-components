import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { IconModule } from '@lucarrloliveira/icon';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [SwitchComponent],
    exports: [SwitchComponent]
})
export class SwitchModule {}
