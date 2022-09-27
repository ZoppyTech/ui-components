import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMiniMenuComponent } from './page-mini-menu.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { MiniMenuModule as MiniMenuModuleDev } from 'projects/mini-menu/src/public-api';
import { MiniMenuModule } from '@ZoppyTech/mini-menu';

const routes: Routes = [
    {
        path: '',
        component: PageMiniMenuComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? IconModule : IconModuleDev,
        environment.production ? MiniMenuModule : MiniMenuModuleDev
    ],
    declarations: [PageMiniMenuComponent],
    exports: [PageMiniMenuComponent]
})
export class PageMiniMenuModule {}
