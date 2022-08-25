import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMenuComponent } from './mini-menu.component';
import { IconModule } from '@lucarrloliveira/icon';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { ButtonModule } from '@lucarrloliveira/button';

@NgModule({
    imports: [CommonModule, VisualIdentityModule, IconModule, ButtonModule],
    declarations: [MiniMenuComponent],
    exports: [MiniMenuComponent]
})
export class MiniMenuModule {}
