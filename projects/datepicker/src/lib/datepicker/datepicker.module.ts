import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { IconModule } from '@lucarrloliveira/icon';
import { ButtonModule } from '@lucarrloliveira/button';
import { InputModule } from '@lucarrloliveira/input';

@NgModule({
    imports: [CommonModule, IconModule, ButtonModule, InputModule],
    declarations: [DatepickerComponent],
    exports: [DatepickerComponent]
})
export class DatepickerModule {}
