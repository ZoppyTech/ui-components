import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageButtonComponent } from './page-button.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { ButtonModule } from '@lucarrloliveira/button';
import { ButtonModule as DevButtonModule } from 'projects/button/src/lib/button/button.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IconModule } from '@lucarrloliveira/icon';

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
        environment.production ? ButtonModule : DevButtonModule,
        IconModule,
        RouterModule.forChild(routes)
    ]
})
export class PageButtonModule {}
