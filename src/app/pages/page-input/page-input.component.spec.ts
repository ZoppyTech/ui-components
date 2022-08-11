/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageInputComponent } from './page-input.component';
import { UtilizationModule } from 'src/app/components/utilization/utilization.module';
import { InputModule } from '@lucarrloliveira/input';

describe('PageInputComponent', () => {
    let component: PageInputComponent;
    let fixture: ComponentFixture<PageInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageInputComponent],
            imports: [UtilizationModule, InputModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
