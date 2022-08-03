import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VisualIdentityModule } from '@lucarrloliveira/visual-identity';
import { ButtonModule } from '@lucarrloliveira/button';
import { ButtonModule as DevButtonModule } from 'projects/button/src/lib/button/button.module';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'confirm-action',
        loadChildren: () => import('./pages/page-confirm-action/page-confirm-action.module').then((m: any) => m.PageConfirmActionModule)
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxCurrencyModule,
        NgxMaskModule.forRoot(),
        RouterModule.forRoot(routes),
        environment.production ? ButtonModule : DevButtonModule
    ],
    providers: [VisualIdentityModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
