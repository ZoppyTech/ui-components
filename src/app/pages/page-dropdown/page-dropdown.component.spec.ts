/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageDropdownComponent } from './page-dropdown.component';

describe('PageDropdownComponent', () => {
    let component: PageDropdownComponent;
    let fixture: ComponentFixture<PageDropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageDropdownComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
