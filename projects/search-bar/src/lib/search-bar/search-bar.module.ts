import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'projects/icon/src/public-api';

@NgModule({
    declarations: [SearchBarComponent],
    exports: [SearchBarComponent],
    imports: [CommonModule, IconModule, VisualIdentityModule, FormsModule]
})
export class SearchBarModule {}
