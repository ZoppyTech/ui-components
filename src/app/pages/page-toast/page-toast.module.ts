import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageToastComponent } from './page-toast.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { ToastModule as ToastModuleDev } from 'projects/toast/src/lib/toast/toast.module';
import { ToastModule } from '@lucarrloliveira/toast';
import { environment } from 'src/environments/environment';
const routes: Routes = [
    {
        path: '',
        component: PageToastComponent
    }
];

@NgModule({
    imports: [CommonModule, UtilizationModule, RouterModule.forChild(routes), environment.production ? ToastModule : ToastModuleDev],
    declarations: [PageToastComponent]
})
export class PageToastModule {}
