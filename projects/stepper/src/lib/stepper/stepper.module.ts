import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { IconModule } from '@ZoppyTech/icon';
import { StepperComponent } from './stepper.component';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [StepperComponent],
    exports: [StepperComponent]
})
export class StepperModule {}
