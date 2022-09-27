import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [ToastComponent],
    exports: [ToastComponent],
    providers: [ToastService]
})
export class ToastModule {}
