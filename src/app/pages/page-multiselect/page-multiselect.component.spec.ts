import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMultiselectComponent } from './page-multiselect.component';

describe('PageMultiselectComponent', () => {
    let component: PageMultiselectComponent;
    let fixture: ComponentFixture<PageMultiselectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageMultiselectComponent]
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
