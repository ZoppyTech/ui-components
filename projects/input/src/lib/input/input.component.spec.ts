/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputComponent } from './input.component';

fdescribe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not change model if disabled', () => {
        const ngModelChange = spyOn(component.ngModelChange, 'emit');
        component.disabled = true;
        component.onModelChange();
        expect(ngModelChange).toHaveBeenCalledTimes(0);
    });

    it('should focus', () => {
        component.hover = true;
        component.focus = false;
        const onFocus = spyOn(component.onFocus, 'emit');
        component.onInputFocus();
        expect(onFocus).toHaveBeenCalledTimes(1);
        expect(component.focus).toBeTrue();
    });

    it('should move cursor to start on focus', () => {
        component.mask = '(00) 00000-0000';
        const moveCursorToStart = spyOn(component, 'moveCursorToStart');
        component.onInputFocus();
        expect(moveCursorToStart).toHaveBeenCalledTimes(1);
    });

    it('should blur if focused', () => {
        component.focus = true;
        const onBlur = spyOn(component.onBlur, 'emit');
        component.onInputBlur();
        expect(onBlur).toHaveBeenCalledTimes(1);
        expect(component.focus).toBeFalse();
    });

    it('should not blur if isn´t focused', () => {
        component.focus = false;
        const onBlur = spyOn(component.onBlur, 'emit');
        component.onInputBlur();
        expect(onBlur).toHaveBeenCalledTimes(0);
    });
});
