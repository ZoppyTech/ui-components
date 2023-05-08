import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInputFileComponent } from './page-input-file.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { InputFileModule as InputFileModuleDev } from 'projects/input-file/src/lib/input-file/input-file.module';
import { InputFileModule } from '@ZoppyTech/input-file';

const routes: Routes = [
    {
        path: '',
        component: PageInputFileComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UtilizationModule,
        environment.production ? InputFileModule : InputFileModuleDev
    ],
    declarations: [PageInputFileComponent],
    exports: [PageInputFileComponent]
})
export class PageInputFileModule {}
