/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageMiniMenuComponent } from './page-mini-menu.component';

describe('PageMiniMenuComponent', () => {
    let component: PageMiniMenuComponent;
    let fixture: ComponentFixture<PageMiniMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageMiniMenuComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMiniMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
