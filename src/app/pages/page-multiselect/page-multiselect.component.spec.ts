import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { PageMultiselectComponent } from './page-multiselect.component';
import { MultiselectModule as MultiselectModuleDev } from 'projects/multiselect/src/lib/multiselect/multiselect.module';
import { MultiselectModule } from '@lucarrloliveira/multiselect';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';

describe('PageMultiselectComponent', () => {
    let component: PageMultiselectComponent;
    let fixture: ComponentFixture<PageMultiselectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageMultiselectComponent],
            imports: [UtilizationModule, RouterTestingModule, environment.production ? MultiselectModule : MultiselectModuleDev]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMultiselectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
