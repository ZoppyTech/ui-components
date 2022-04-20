import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'projects/button/src/lib/button/button.module';
import { ButtonModule as ButtonModuleDev } from 'projects/button/src/lib/button/button.module';
import { IconModule } from '@lucarrloliveira/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { environment } from 'src/environments/environment';
import { PageButtonComponent } from './page-button.component';

describe('PageButtonComponent', () => {
    let component: PageButtonComponent;
    let fixture: ComponentFixture<PageButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageButtonComponent],
            imports: [
                UtilizationModule,
                RouterTestingModule,
                environment.production ? ButtonModule : ButtonModuleDev,
                environment.production ? IconModule : IconModuleDev
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
