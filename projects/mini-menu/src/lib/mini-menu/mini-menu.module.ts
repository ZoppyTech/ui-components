import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMenuComponent } from './mini-menu.component';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { ButtonModule } from '@ZoppyTech/button';

@NgModule({
    imports: [CommonModule, VisualIdentityModule, IconModule, ButtonModule],
    declarations: [MiniMenuComponent],
    exports: [MiniMenuComponent]
})
export class MiniMenuModule {}
