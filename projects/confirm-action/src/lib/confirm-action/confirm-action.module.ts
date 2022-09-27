import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from '@ZoppyTech/button';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { ConfirmActionComponent } from './confirm-action.component';
import { ConfirmActionService } from './confirm-action.service';

@NgModule({
    declarations: [ConfirmActionComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule, ButtonModule],
    exports: [ConfirmActionComponent],
    providers: [ConfirmActionService]
})
export class ConfirmActionModule {}
