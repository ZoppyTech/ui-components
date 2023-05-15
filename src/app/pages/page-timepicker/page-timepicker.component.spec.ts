import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTimepickerComponent } from './page-timepicker.component';

describe('PageTimepickerComponent', () => {
    let component: PageTimepickerComponent;
    let fixture: ComponentFixture<PageTimepickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageTimepickerComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PageTimepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
