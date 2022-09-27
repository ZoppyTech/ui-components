/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwitchComponent } from './switch.component';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

describe('SwitchComponent', () => {
    let component: SwitchComponent;
    let fixture: ComponentFixture<SwitchComponent>;
    let onToggle: jasmine.Spy;
    let activeChange: jasmine.Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwitchComponent],
            imports: [IconModule, VisualIdentityModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        onToggle = spyOn(component.onToggleSwitch, 'emit');
        activeChange = spyOn(component.activeChange, 'emit');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not toggle switch if is disabled', () => {
        component.disabled = true;
        component.toggleSwitch();
        expect(onToggle).not.toHaveBeenCalled();
        expect(activeChange).not.toHaveBeenCalled();
    });

    it('should toggle switch if is enable', () => {
        component.disabled = false;
        component.toggleSwitch();
        expect(onToggle).toHaveBeenCalled();
        expect(activeChange).toHaveBeenCalled();
    });

    it('should toggle switch pressing enter if is enable', () => {
        component.disabled = false;
        component.focused = true;
        component.toggleSwitchEnter();
        expect(onToggle).toHaveBeenCalled();
        expect(activeChange).toHaveBeenCalled();
    });

    it('should not toggle switch pressing enter if is not focused', () => {
        component.disabled = false;
        component.focused = false;
        component.toggleSwitchEnter();
        expect(onToggle).not.toHaveBeenCalled();
        expect(activeChange).not.toHaveBeenCalled();
    });
});
