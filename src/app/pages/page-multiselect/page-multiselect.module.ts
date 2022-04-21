import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMultiselectComponent } from './page-multiselect.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { MultiselectModule as MultiselectModuleDev } from 'projects/multiselect/src/lib/multiselect/multiselect.module';
import { MultiselectModule } from '@lucarrloliveira/multiselect';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageMultiselectComponent
    }
];

@NgModule({
    declarations: [PageMultiselectComponent],
    exports: [PageMultiselectComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? MultiselectModule : MultiselectModuleDev
    ]
})
export class PageMultiselectModule {}
