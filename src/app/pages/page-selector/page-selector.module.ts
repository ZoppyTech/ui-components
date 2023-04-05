import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSelectorComponent } from './page-selector.component';
import { SelectorModule } from '@ZoppyTech/selector';
import { SelectorModule as SelectorModuleDev } from 'projects/selector/src/lib/selector/selector.module';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageSelectorComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), UtilizationModule, environment.production ? SelectorModule : SelectorModuleDev],
    declarations: [PageSelectorComponent],
    exports: [PageSelectorComponent]
})
export class PageSelectorModule {}
