import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { ButtonModule } from '@ZoppyTech/button';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

@NgModule({
    imports: [CommonModule, ButtonModule, IconModule, VisualIdentityModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent]
})
export class PaginationModule {}
