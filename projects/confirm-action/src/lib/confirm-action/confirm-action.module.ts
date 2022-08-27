import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from '@lucarrloliveira/button';
import { IconModule } from '@lucarrloliveira/icon';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { ConfirmActionComponent } from './confirm-action.component';
import { ConfirmActionService } from './confirm-action.service';

@NgModule({
    declarations: [ConfirmActionComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule, ButtonModule],
    exports: [ConfirmActionComponent],
    providers: [ConfirmActionService]
})
export class ConfirmActionModule {}
