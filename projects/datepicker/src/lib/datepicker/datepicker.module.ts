import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { IconModule } from '@lucarrloliveira/icon';
import { ButtonModule } from '@lucarrloliveira/button';

@NgModule({
    imports: [CommonModule, IconModule, ButtonModule],
    declarations: [DatepickerComponent],
    exports: [DatepickerComponent]
})
export class DatepickerModule {}
