import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageSearchbarComponent } from './page-searchbar.component';
import { IconModule } from '@lucarrloliveira/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { SearchBarModule as SearchBarModuleDev } from 'projects/search-bar/src/lib/search-bar/search-bar.module';
import { SearchBarModule } from '@lucarrloliveira/search-bar';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    {
        path: '',
        component: PageSearchbarComponent
    }
];

@NgModule({
    declarations: [PageSearchbarComponent],
    exports: [PageSearchbarComponent],
    imports: [
        CommonModule,
        UtilizationModule,
        environment.production ? IconModule : IconModuleDev,
        environment.production ? SearchBarModule : SearchBarModuleDev,
        RouterModule.forChild(routes)
    ]
})
export class PageSearchbarModule {}
