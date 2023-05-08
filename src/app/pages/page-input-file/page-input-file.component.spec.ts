import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInputFileComponent } from './page-input-file.component';

describe('PageInputFileComponent', () => {
    let component: PageInputFileComponent;
    let fixture: ComponentFixture<PageInputFileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageInputFileComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PageInputFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
