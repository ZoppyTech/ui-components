import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTooltipComponent } from './page-tooltip.component';
import { Routes, RouterModule } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { TooltipModule as TooltipModuleDev } from 'projects/tooltip/src/lib/tooltip/tooltip.module';
import { TooltipModule } from '@ZoppyTech/tooltip';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageTooltipComponent
    }
];

@NgModule({
    imports: [CommonModule, UtilizationModule, RouterModule.forChild(routes), environment.production ? TooltipModule : TooltipModule],
    declarations: [PageTooltipComponent]
})
export class PageTooltipModule {}
