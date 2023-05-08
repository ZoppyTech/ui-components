import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PageInfiniteScrollComponent } from './page-infinite-scroll.component';
import { InfiniteScrollModule as InfiniteScrollModuleDev } from 'projects/infinite-scroll/src/lib/infinite-scroll/infinite-scroll.module';
import { InfiniteScrollModule } from '@ZoppyTech/infinite-scroll';

const routes: Routes = [
    {
        path: '',
        component: PageInfiniteScrollComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        UtilizationModule,
        RouterModule.forChild(routes),
        environment.production ? InfiniteScrollModule : InfiniteScrollModuleDev
    ],
    declarations: [PageInfiniteScrollComponent]
})
export class PageInfiniteScrollModule {}
