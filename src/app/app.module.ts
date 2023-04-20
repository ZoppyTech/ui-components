import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { ButtonModule } from '@ZoppyTech/button';
import { ButtonModule as DevButtonModule } from 'projects/button/src/lib/button/button.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ToastModule } from '@ZoppyTech/toast';
import { ToastModule as DevToastModule } from 'projects/toast/src/lib/toast/toast.module';
import { ConfirmActionModule } from '@ZoppyTech/confirm-action';
import { ConfirmActionModule as DevConfirmActionModule } from 'projects/confirm-action/src/lib/confirm-action/confirm-action.module';
import { TooltipModule as DevTooltipModule } from 'projects/tooltip/src/lib/tooltip/tooltip.module';
import { TooltipModule } from '@ZoppyTech/tooltip';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as DevIconModule } from 'projects/icon/src/lib/icon/icon.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'button'
    },
    {
        path: 'button',
        loadChildren: () => import('./pages/page-button/page-button.module').then((m: any) => m.PageButtonModule)
    },
    {
        path: 'checkbox',
        loadChildren: () => import('./pages/page-checkbox/page-checkbox.module').then((m: any) => m.PageCheckboxModule)
    },
    {
        path: 'searchbar',
        loadChildren: () => import('./pages/page-searchbar/page-searchbar.module').then((m: any) => m.PageSearchbarModule)
    },
    {
        path: 'radiobutton',
        loadChildren: () => import('./pages/page-radiobutton/page-radiobutton.module').then((m: any) => m.PageRadiobuttonModule)
    },
    {
        path: 'multiselect',
        loadChildren: () => import('./pages/page-multiselect/page-multiselect.module').then((m: any) => m.PageMultiselectModule)
    },
    {
        path: 'toast',
        loadChildren: () => import('./pages/page-toast/page-toast.module').then((m: any) => m.PageToastModule)
    },
    {
        path: 'tooltip',
        loadChildren: () => import('./pages/page-tooltip/page-tooltip.module').then((m: any) => m.PageTooltipModule)
    },
    {
        path: 'input',
        loadChildren: () => import('./pages/page-input/page-input.module').then((m: any) => m.PageInputModule)
    },
    {
        path: 'switch',
        loadChildren: () => import('./pages/page-switch/page-switch.module').then((m: any) => m.PageSwitchModule)
    },
    {
        path: 'confirm-action',
        loadChildren: () => import('./pages/page-confirm-action/page-confirm-action.module').then((m: any) => m.PageConfirmActionModule)
    },
    {
        path: 'dropdown',
        loadChildren: () => import('./pages/page-dropdown/page-dropdown.module').then((m: any) => m.PageDropdownModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/page-contact/page-contact.module').then((m: any) => m.PageContactModule)
    },
    {
        path: 'mini-menu',
        loadChildren: () => import('./pages/page-mini-menu/page-mini-menu.module').then((m: any) => m.PageMiniMenuModule)
    },
    {
        path: 'datepicker',
        loadChildren: () => import('./pages/page-datepicker/page-datepicker.module').then((m: any) => m.PageDatepickerModule)
    },
    {
        path: 'pagination',
        loadChildren: () => import('./pages/page-pagination/page-pagination.module').then((m: any) => m.PagePaginationModule)
    },
    {
        path: 'stepper',
        loadChildren: () => import('./pages/page-stepper/page-stepper.module').then((m: any) => m.PageStepperModule)
    },
    {
        path: 'selector',
        loadChildren: () => import('./pages/page-selector/page-selector.module').then((m: any) => m.PageSelectorModule)
    },
    {
        path: 'template-input',
        loadChildren: () => import('./pages/page-template-input/page-template-input.module').then((m: any) => m.PageTemplateInputModule)
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxCurrencyModule,
        NgxMaskModule.forRoot(),
        RouterModule.forRoot(routes),
        environment.production ? ButtonModule : DevButtonModule,
        environment.production ? ToastModule : DevToastModule,
        environment.production ? ConfirmActionModule : DevConfirmActionModule,
        environment.production ? IconModule : DevIconModule,
        environment.production ? TooltipModule : DevTooltipModule.forRoot()
    ],
    providers: [VisualIdentityModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
