import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { IconModule } from '@ZoppyTech/icon';
import { ButtonModule } from '@ZoppyTech/button';
import { SearchBarModule } from '@ZoppyTech/search-bar';
import { CheckboxModule } from '@ZoppyTech/checkbox';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, SearchBarModule, CheckboxModule, VisualIdentityModule],
    declarations: [MultiSelectComponent],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule {}
