import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfiniteScrollComponent } from './page-infinite-scroll.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { InfiniteScrollModule } from 'infinite-scroll';
import { InfiniteScrollModule as InfiniteScrollModuleDev } from 'projects/infinite-scroll/src/lib/infinite-scroll/infinite-scroll.module';
InfiniteScrollModule;

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
