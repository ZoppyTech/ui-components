import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { IconModule } from '@ZoppyTech/icon';
import { ButtonModule } from '@ZoppyTech/button';
import { InputModule } from '@ZoppyTech/input';

@NgModule({
    imports: [CommonModule, IconModule, ButtonModule, InputModule],
    declarations: [DatepickerComponent],
    exports: [DatepickerComponent]
})
export class DatepickerModule {}
