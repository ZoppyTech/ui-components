import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { IconModule } from '@ZoppyTech/icon';
import { DragAndDropDirective } from './drag-and-drop.directive';

@NgModule({
    declarations: [InputFileComponent, DragAndDropDirective],
    exports: [InputFileComponent],
    imports: [CommonModule, IconModule]
})
export class InputFileModule {}
