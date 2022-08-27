import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfirmActionComponent } from './page-confirm-action.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

const routes: Routes = [
    {
        path: '',
        component: PageConfirmActionComponent
    }
];

@NgModule({
    imports: [CommonModule, UtilizationModule, RouterModule.forChild(routes)],
    declarations: [PageConfirmActionComponent]
})
export class PageConfirmActionModule {}
