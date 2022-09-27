import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CheckboxComponent],
            imports: [IconModule, VisualIdentityModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should focus', () => {
        component.onFocusChange();
        expect(component.focused).toBeTruthy();
    });

    it('should blur', () => {
        component.onBlurChange();
        expect(component.focused).toBeFalsy();
    });

    it('shouldnt call actions if is disabled', () => {
        component.disabled = true;
        expect(component.toggleCheckbox()).toBeFalsy();
        expect(component.toggleCheckboxEnter()).toBeFalsy();
    });

    it('should call actions if is not disabled', () => {
        component.disabled = false;
        expect(component.toggleCheckbox()).toBeTruthy();

        component.focused = true;
        expect(component.toggleCheckboxEnter()).toBeTruthy();

        component.focused = false;
        expect(component.toggleCheckboxEnter()).toBeFalsy();
    });
});
