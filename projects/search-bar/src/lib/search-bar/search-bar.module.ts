import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { IconModule } from '@lucarrloliveira/icon';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchBarComponent,
  ],
  exports: [
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    VisualIdentityModule,
    FormsModule
  ]
})
export class SearchBarModule { }
