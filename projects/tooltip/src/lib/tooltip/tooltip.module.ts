import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipService } from './tooltip.service';

@NgModule({
    declarations: [TooltipDirective, TooltipComponent],
    imports: [CommonModule],
    exports: [TooltipDirective, TooltipComponent],
    providers: [TooltipService]
})
export class TooltipModule {
    public static forRoot(): ModuleWithProviders<TooltipModule> {
        return {
            ngModule: TooltipModule,
            providers: [TooltipService]
        };
    }
}
