import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCheckboxComponent } from './page-checkbox.component';
import { RouterModule, Routes } from '@angular/router';
import { IconModule } from '@lucarrloliveira/icon';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

const routes: Routes = [
    {
        path: '',
        component: PageCheckboxComponent
    }
];

@NgModule({
    declarations: [PageCheckboxComponent],
    exports: [PageCheckboxComponent],
    imports: [CommonModule, UtilizationModule, IconModule, RouterModule.forChild(routes)]
})
export class PageCheckboxModule {}
