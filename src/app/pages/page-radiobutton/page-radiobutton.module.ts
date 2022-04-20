import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageRadiobuttonComponent } from './page-radiobutton.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RadioButtonModule } from '@lucarrloliveira/radio-button';
import { RadioButtonModule as RadioButtonModuleDev } from 'projects/radio-button/src/lib/radio-button/radio-button.module';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageRadiobuttonComponent
    }
];

@NgModule({
    declarations: [PageRadiobuttonComponent],
    exports: [PageRadiobuttonComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? RadioButtonModule : RadioButtonModuleDev
    ]
})
export class PageRadiobuttonModule {}
