import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { IconModule } from '@ZoppyTech/icon';
import { InputModule } from '@ZoppyTech/input';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [TimepickerComponent],
    exports: [TimepickerComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule, InputModule, FormsModule, ReactiveFormsModule]
})
export class TimepickerModule {}
