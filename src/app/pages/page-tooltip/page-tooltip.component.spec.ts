/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageTooltipComponent } from './page-tooltip.component';

describe('PageTooltipComponent', () => {
    let component: PageTooltipComponent;
    let fixture: ComponentFixture<PageTooltipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageTooltipComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
