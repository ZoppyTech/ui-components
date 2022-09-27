import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactComponent } from './page-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { IconModule } from '@ZoppyTech/icon';
import { ContactModule as ContactModuleDev } from 'projects/contact/src/lib/contact/contact.module';
import { ContactModule } from '@ZoppyTech/contact';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageContactComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? IconModule : IconModuleDev,
        environment.production ? ContactModule : ContactModuleDev
    ],
    declarations: [PageContactComponent],
    exports: [PageContactComponent]
})
export class PageContactModule {}
