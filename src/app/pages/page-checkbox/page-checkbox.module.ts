import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCheckboxComponent } from './page-checkbox.component';
import { RouterModule, Routes } from '@angular/router';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { CheckboxModule as CheckboxModuleDev } from 'projects/checkbox/src/lib/checkbox/checkbox.module';
import { CheckboxModule } from '@ZoppyTech/checkbox';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageCheckboxComponent
    }
];

@NgModule({
    declarations: [PageCheckboxComponent],
    exports: [PageCheckboxComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? IconModule : IconModuleDev,
        environment.production ? CheckboxModule : CheckboxModuleDev
    ]
})
export class PageCheckboxModule {}
