import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageToastComponent } from './page-toast.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

const routes: Routes = [
    {
        path: '',
        component: PageToastComponent
    }
];

@NgModule({
    imports: [CommonModule, UtilizationModule, RouterModule.forChild(routes)],
    declarations: [PageToastComponent]
})
export class PageToastModule {}
