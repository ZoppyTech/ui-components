import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RadioButtonModule } from '@lucarrloliveira/radio-button';
import { RadioButtonModule as RadioButtonModuleDev } from 'projects/radio-button/src/lib/radio-button/radio-button.module';
import { PageRadiobuttonComponent } from './page-radiobutton.component';
import { environment } from 'src/environments/environment';

describe('PageRadiobuttonComponent', () => {
    let component: PageRadiobuttonComponent;
    let fixture: ComponentFixture<PageRadiobuttonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageRadiobuttonComponent],
            imports: [UtilizationModule, RouterTestingModule, environment.production ? RadioButtonModule : RadioButtonModuleDev]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageRadiobuttonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
