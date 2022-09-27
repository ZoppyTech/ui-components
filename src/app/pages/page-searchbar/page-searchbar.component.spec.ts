import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconModule } from '@ZoppyTech/icon';
import { SearchBarModule } from '@ZoppyTech/search-bar';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { PageSearchbarComponent } from './page-searchbar.component';

describe('PageSearchbarComponent', () => {
    let component: PageSearchbarComponent;
    let fixture: ComponentFixture<PageSearchbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageSearchbarComponent],
            imports: [UtilizationModule, IconModule, RouterTestingModule, SearchBarModule]
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
