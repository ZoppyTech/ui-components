import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateInputComponent } from './page-template-input.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { TemplateInputModule as TemplateInputModuleDev } from 'projects/template-input/src/lib/template-input/template-input.module';
import { TemplateInputModule } from '@ZoppyTech/template-input';
import { PreviewModule } from '@ZoppyTech/template-input';
import { PreviewModule as PreviewModuleDev } from 'projects/template-input/src/lib/preview/preview.module';
import { InputFileModule } from '@ZoppyTech/input-file';
import { InputFileModule as InputFileModuleDev } from 'projects/input-file/src/lib/input-file/input-file.module';
import { environment } from 'src/environments/environment';
import { InputModule } from '@ZoppyTech/input';

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
        InputModule,
        environment.production ? TemplateInputModule : TemplateInputModuleDev,
        environment.production ? PreviewModule : PreviewModuleDev,
        environment.production ? InputFileModule : InputFileModuleDev
    ]
})
export class PageTemplateInputModule {}
