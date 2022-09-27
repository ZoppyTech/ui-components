import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSwitchComponent } from './page-switch.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { SwitchModule as SwitchModuleDev } from 'projects/switch/src/lib/switch/switch.module';
import { SwitchModule } from '@ZoppyTech/switch';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageSwitchComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), UtilizationModule, environment.production ? SwitchModule : SwitchModuleDev],
    declarations: [PageSwitchComponent],
    exports: [PageSwitchComponent]
})
export class PageSwitchModule {}
