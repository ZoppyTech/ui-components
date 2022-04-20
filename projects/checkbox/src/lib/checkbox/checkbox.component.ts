import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    @Input() public active: boolean = false;
    @Input() public disabled: boolean = false;
    @Output() onToggleCheckbox = new EventEmitter();
    @Output() onFocus = new EventEmitter();
    @Output() onBlur = new EventEmitter()
    @Output() public activeChange = new EventEmitter<boolean>();
    public focused: boolean = false;

    public constructor() {}

    public onFocusChange() {
        this.focused = true;
        this.onFocus.emit();
    }

    public onBlurChange() {
        this.focused = false;
        this.onBlur.emit();
    }

    public toggleCheckbox() {
        if (!this.disabled) {
            this.active = !this.active;
            this.onToggleCheckbox.emit(this.active);
            this.activeChange.emit(this.active);
        }
    }

    public toggleCheckboxEnter() {
        if (this.focused && !this.disabled) {
            this.active = !this.active;
            this.onToggleCheckbox.emit(this.active);
            this.activeChange.emit(this.active);
        }
    }
}
