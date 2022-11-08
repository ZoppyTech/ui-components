import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePaginationComponent } from './page-pagination.component';
import { environment } from 'src/environments/environment';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from '@ZoppyTech/pagination';
import { PaginationModule as PaginationModuleDev } from 'projects/pagination/src/lib/pagination/pagination.module';

const routes: Routes = [
    {
        path: '',
        component: PagePaginationComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UtilizationModule,
        environment.production ? PaginationModule : PaginationModuleDev
    ],
    declarations: [PagePaginationComponent]
})
export class PagePaginationModule {}
