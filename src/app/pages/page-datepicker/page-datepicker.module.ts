import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDatepickerComponent } from './page-datepicker.component';
import { DatepickerModule } from '@ZoppyTech/datepicker';
import { DatepickerModule as DatepickerModuleDev } from 'projects/datepicker/src/lib/datepicker/datepicker.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

const routes: Routes = [
    {
        path: '',
        component: PageDatepickerComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? DatepickerModule : DatepickerModuleDev
    ],
    declarations: [PageDatepickerComponent],
    exports: [PageDatepickerComponent]
})
export class PageDatepickerModule {}
