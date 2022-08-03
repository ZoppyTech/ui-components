import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInputComponent } from './page-input.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { InputModule as InputModuleDev } from 'projects/input/src/lib/input/input.module';
import { InputModule } from '@lucarrloliveira/input';
import { environment } from 'src/environments/environment';
const routes: Routes = [
    {
        path: '',
        component: PageInputComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        RouterModule.forChild(routes),
        environment.production ? InputModule : InputModuleDev
    ],
    declarations: [PageInputComponent]
})
export class PageInputModule {}
