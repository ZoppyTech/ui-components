import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { IconModule } from '@ZoppyTech/icon';

@NgModule({
    imports: [CommonModule, IconModule, VisualIdentityModule],
    declarations: [InfiniteScrollComponent],
    exports: [InfiniteScrollComponent]
})
export class InfiniteScrollModule {}
