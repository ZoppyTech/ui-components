import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRadiobuttonComponent } from './page-radiobutton.component';

describe('PageRadiobuttonComponent', () => {
    let component: PageRadiobuttonComponent;
    let fixture: ComponentFixture<PageRadiobuttonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageRadiobuttonComponent]
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
