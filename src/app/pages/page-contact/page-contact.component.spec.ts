/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageContactComponent } from './page-contact.component';

describe('PageContactComponent', () => {
    let component: PageContactComponent;
    let fixture: ComponentFixture<PageContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageContactComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
