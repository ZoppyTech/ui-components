import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMultiSelectComponent } from './page-multiselect.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { MultiSelectModule as MultiSelectModuleDev } from 'projects/multi-select/src/lib/multi-select/multi-select.module';
import { MultiSelectModule } from '@lucarrloliveira/multi-select';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageMultiSelectComponent
    }
];

@NgModule({
    declarations: [PageMultiSelectComponent],
    exports: [PageMultiSelectComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? MultiSelectModule : MultiSelectModuleDev
    ]
})
export class PageMultiselectModule {}
