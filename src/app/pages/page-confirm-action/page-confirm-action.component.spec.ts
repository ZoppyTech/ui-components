/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageConfirmActionComponent } from './page-confirm-action.component';

describe('PageConfirmActionComponent', () => {
    let component: PageConfirmActionComponent;
    let fixture: ComponentFixture<PageConfirmActionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageConfirmActionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageConfirmActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
