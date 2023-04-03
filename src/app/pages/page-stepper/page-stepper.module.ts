import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { StepperModule as StepperModuleDev } from 'projects/stepper/src/lib/stepper/stepper.module';
import { StepperModule } from '@ZoppyTech/stepper';
import { environment } from 'src/environments/environment';
import { PageStepperComponent } from './page-stepper.component';

const routes: Routes = [
    {
        path: '',
        component: PageStepperComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), UtilizationModule, environment.production ? StepperModule : StepperModuleDev],
    declarations: [PageStepperComponent],
    exports: [PageStepperComponent]
})
export class PageStepperModule {}
