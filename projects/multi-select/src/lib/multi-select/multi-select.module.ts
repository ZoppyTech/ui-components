import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { IconModule } from '@lucarrloliveira/icon';
import { ButtonModule } from '@lucarrloliveira/button';
import { SearchBarModule } from 'projects/search-bar/src/public-api';
import { CheckboxModule } from 'projects/checkbox/src/public-api';

@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, SearchBarModule, CheckboxModule],
    declarations: [MultiSelectComponent],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule {}
