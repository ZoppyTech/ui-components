import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PageCheckboxComponent } from './page-checkbox.component';
import { IconModule } from '@lucarrloliveira/icon';

describe('PageCheckboxComponent', () => {
    let component: PageCheckboxComponent;
    let fixture: ComponentFixture<PageCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageCheckboxComponent],
            imports: [UtilizationModule, IconModule, RouterTestingModule]
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
