import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageRadiobuttonComponent } from './page-radiobutton.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RadioButtonModule } from 'projects/radio-button/src/lib/radio-button/radio-button.module';

const routes: Routes = [
    {
        path: '',
        component: PageRadiobuttonComponent
    }
];

@NgModule({
    declarations: [PageRadiobuttonComponent],
    exports: [PageRadiobuttonComponent],
    imports: [CommonModule, UtilizationModule, RouterModule.forChild(routes), RadioButtonModule]
})
export class PageRadiobuttonModule {}
