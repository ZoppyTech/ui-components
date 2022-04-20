import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PageCheckboxComponent } from './page-checkbox.component';
import { CheckboxModule } from '@lucarrloliveira/checkbox';
import { CheckboxModule as CheckboxModuleDev } from 'projects/checkbox/src/lib/checkbox/checkbox.module';
import { IconModule } from '@lucarrloliveira/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { environment } from 'src/environments/environment';

describe('PageCheckboxComponent', () => {
    let component: PageCheckboxComponent;
    let fixture: ComponentFixture<PageCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageCheckboxComponent],
            imports: [
                UtilizationModule,
                RouterTestingModule,
                environment.production ? IconModule : IconModuleDev,
                environment.production ? CheckboxModule : CheckboxModuleDev
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
