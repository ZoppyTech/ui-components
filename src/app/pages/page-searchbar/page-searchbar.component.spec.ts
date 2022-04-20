import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchbarComponent } from './page-searchbar.component';

describe('PageSearchbarComponent', () => {
    let component: PageSearchbarComponent;
    let fixture: ComponentFixture<PageSearchbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageSearchbarComponent]
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
