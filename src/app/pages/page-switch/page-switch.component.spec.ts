/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageSwitchComponent } from './page-switch.component';

describe('PageSwitchComponent', () => {
    let component: PageSwitchComponent;
    let fixture: ComponentFixture<PageSwitchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageSwitchComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
