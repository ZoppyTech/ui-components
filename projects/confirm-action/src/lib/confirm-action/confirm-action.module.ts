import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmActionComponent } from './confirm-action.component';
import { ConfirmActionService } from './confirm-action.service';

@NgModule({
    declarations: [ConfirmActionComponent],
    imports: [CommonModule],
    exports: [ConfirmActionComponent],
    providers: [ConfirmActionService]
})
export class ConfirmActionModule {}
