import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateInputComponent } from './page-template-input.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { TemplateInputModule as TemplateInputModuleDev } from 'projects/template-input/src/lib/template-input/template-input.module';
import { TemplateInputModule } from '@ZoppyTech/template-input';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageTemplateInputComponent
    }
];

@NgModule({
    declarations: [PageTemplateInputComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? TemplateInputModule : TemplateInputModuleDev
    ]
})
export class PageTemplateInputModule {}
