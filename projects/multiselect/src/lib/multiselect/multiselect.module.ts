import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectComponent } from './multiselect.component';
import { ButtonModule } from '@lucarrloliveira/button';
import { IconModule } from '@lucarrloliveira/icon';
import { SearchBarModule } from '@lucarrloliveira/search-bar';
import { CheckboxModule } from '@lucarrloliveira/checkbox';

@NgModule({
  declarations: [
    MultiselectComponent
  ],
  exports: [
    MultiselectComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    SearchBarModule,
    CheckboxModule
  ]
})
export class MultiselectModule { }
