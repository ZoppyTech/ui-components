import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { IconModule } from '@ZoppyTech/icon';
import { SearchBarModule } from '@ZoppyTech/search-bar';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule, SearchBarModule],
    declarations: [DropdownComponent],
    exports: [DropdownComponent]
})
export class DropdownModule {}
