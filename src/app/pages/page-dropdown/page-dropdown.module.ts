import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDropdownComponent } from './page-dropdown.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { DropdownModule as DropdownModuleDev } from 'projects/dropdown/src/lib/dropdown/dropdown.module';
import { DropdownModule } from '@lucarrloliveira/dropdown';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageDropdownComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), UtilizationModule, environment.production ? DropdownModule : DropdownModuleDev],
    declarations: [PageDropdownComponent],
    exports: [PageDropdownComponent]
})
export class PageDropdownModule {}
