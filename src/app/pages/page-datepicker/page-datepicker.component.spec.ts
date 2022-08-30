/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageDatepickerComponent } from './page-datepicker.component';

describe('PageDatepickerComponent', () => {
    let component: PageDatepickerComponent;
    let fixture: ComponentFixture<PageDatepickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageDatepickerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
