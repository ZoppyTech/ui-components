import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PageCheckboxComponent } from './page-checkbox.component';
import { CheckboxModule } from '@ZoppyTech/checkbox';
import { IconModule } from '@ZoppyTech/icon';
import { environment } from 'src/environments/environment';

describe('PageCheckboxComponent', () => {
    let component: PageCheckboxComponent;
    let fixture: ComponentFixture<PageCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageCheckboxComponent],
            imports: [UtilizationModule, RouterTestingModule, IconModule, CheckboxModule]
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
