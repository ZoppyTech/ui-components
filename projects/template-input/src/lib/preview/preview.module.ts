import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { PreviewComponent } from './preview.component';

@NgModule({
    declarations: [PreviewComponent],
    exports: [PreviewComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule]
})
export class PreviewModule {}
