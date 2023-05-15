import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTimepickerComponent } from './page-timepicker.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { environment } from 'src/environments/environment';
import { TimepickerModule } from '@ZoppyTech/timepicker';
import { TimepickerModule as TimepickerModuleDev } from 'projects/timepicker/src/lib/timepicker/timepicker.module';

const routes: Routes = [
    {
        path: '',
        component: PageTimepickerComponent
    }
];

@NgModule({
    declarations: [PageTimepickerComponent],
    exports: [PageTimepickerComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? TimepickerModule : TimepickerModuleDev
    ]
})
export class PageTimepickerModule {}
