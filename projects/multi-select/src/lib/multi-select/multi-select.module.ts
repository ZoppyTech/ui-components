import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { CheckboxModule } from '@lucarrloliveira/checkbox';
import { SearchBarModule } from '@lucarrloliveira/search-bar';
import { IconModule } from '@lucarrloliveira/icon';
import { ButtonModule } from '@lucarrloliveira/button';

@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, SearchBarModule, CheckboxModule],
    declarations: [MultiSelectComponent],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule {}
