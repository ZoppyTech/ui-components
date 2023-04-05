import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [SelectorComponent],
    exports: [SelectorComponent]
})
export class SelectorModule {}
