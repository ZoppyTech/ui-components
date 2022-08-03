import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageConfirmActionComponent } from './page-confirm-action.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { ConfirmActionModule as ConfirmActionModuleDev } from 'projects/confirm-action/src/lib/confirm-action/confirm-action.module';
import { ConfirmActionModule } from '@lucarrloliveira/confirm-action';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageConfirmActionComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? ConfirmActionModule : ConfirmActionModuleDev
    ],
    declarations: [PageConfirmActionComponent]
})
export class PageConfirmActionModule {}
