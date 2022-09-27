import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMultiSelectComponent } from './page-multiselect.component';
import { MultiSelectModule } from '@ZoppyTech/multi-select';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

describe('PageMultiSelectComponent', () => {
    let component: PageMultiSelectComponent;
    let fixture: ComponentFixture<PageMultiSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageMultiSelectComponent],
            imports: [UtilizationModule, RouterTestingModule, MultiSelectModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMultiSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
