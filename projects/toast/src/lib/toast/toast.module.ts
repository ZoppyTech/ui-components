import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { IconModule } from '@lucarrloliveira/icon';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [ToastComponent],
    exports: [ToastComponent],
    providers: [ToastService]
})
export class ToastModule {}
