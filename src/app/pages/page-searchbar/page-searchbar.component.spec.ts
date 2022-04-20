import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconModule } from '@lucarrloliveira/icon';
import { IconModule as IconModuleDev } from 'projects/icon/src/lib/icon/icon.module';
import { SearchBarModule } from 'projects/search-bar/src/lib/search-bar/search-bar.module';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { environment } from 'src/environments/environment';
import { PageSearchbarComponent } from './page-searchbar.component';

describe('PageSearchbarComponent', () => {
    let component: PageSearchbarComponent;
    let fixture: ComponentFixture<PageSearchbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageSearchbarComponent],
            imports: [UtilizationModule, environment.production ? IconModule : IconModuleDev, RouterTestingModule, SearchBarModule]
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(PageSearchbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
