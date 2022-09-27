import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '@ZoppyTech/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { environment } from 'src/environments/environment';
import { UtilizationComponent } from './utilization.component';

describe('UtilizationComponent', () => {
    let component: UtilizationComponent;
    let fixture: ComponentFixture<UtilizationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UtilizationComponent],
            imports: [environment.production ? IconModule : IconModuleDev]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UtilizationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
