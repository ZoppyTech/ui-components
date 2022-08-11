import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { IconModule } from '@lucarrloliveira/icon';
import { ButtonModule } from '@lucarrloliveira/button';
import { SearchBarModule } from '@lucarrloliveira/search-bar';
import { CheckboxModule } from '@lucarrloliveira/checkbox';

@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, SearchBarModule, CheckboxModule],
    declarations: [MultiSelectComponent],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule {}
