import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, VisualIdentityModule],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})
export class ContactModule {}
