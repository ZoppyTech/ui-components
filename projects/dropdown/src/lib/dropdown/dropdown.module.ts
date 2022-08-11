import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { IconModule } from '@lucarrloliveira/icon';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [DropdownComponent],
    exports: [DropdownComponent]
})
export class DropdownModule {}
