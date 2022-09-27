import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { IconModule } from '@ZoppyTech/icon';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [SwitchComponent],
    exports: [SwitchComponent]
})
export class SwitchModule {}
