import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageButtonComponent } from './page-button.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { ButtonModule } from 'projects/button/src/lib/button/button.module';
import { ButtonModule as ButtonModuleDev } from 'projects/button/src/lib/button/button.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';

const routes: Routes = [
    {
        path: '',
        component: PageButtonComponent
    }
];

@NgModule({
    declarations: [PageButtonComponent],
    exports: [PageButtonComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        environment.production ? ButtonModule : ButtonModuleDev,
        environment.production ? IconModule : IconModuleDev,
        RouterModule.forChild(routes)
    ]
})
export class PageButtonModule {}
