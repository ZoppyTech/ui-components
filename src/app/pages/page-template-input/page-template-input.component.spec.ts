import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTemplateInputComponent } from './page-template-input.component';

describe('PageTemplateInputComponent', () => {
    let component: PageTemplateInputComponent;
    let fixture: ComponentFixture<PageTemplateInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageTemplateInputComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PageTemplateInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
