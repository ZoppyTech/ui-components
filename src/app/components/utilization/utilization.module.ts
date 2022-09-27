import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilizationComponent } from './utilization.component';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { environment } from 'src/environments/environment';
@NgModule({
    declarations: [UtilizationComponent],
    exports: [UtilizationComponent],
    imports: [CommonModule, environment.production ? IconModule : IconModuleDev]
})
export class UtilizationModule {}
