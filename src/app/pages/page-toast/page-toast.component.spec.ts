/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageToastComponent } from './page-toast.component';

describe('PageToastComponent', () => {
    let component: PageToastComponent;
    let fixture: ComponentFixture<PageToastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageToastComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
