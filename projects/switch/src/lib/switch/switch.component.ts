import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
    @Input() public active = false;
    @Input() public disabled = false;
    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public onToggleSwitch = new EventEmitter();
    public focused = false;

    public constructor() {}

    public ngOnInit(): void {}

    public onFocus() {
        this.focused = true;
    }

    public onBlur() {
        this.focused = false;
    }

    public toggleSwitch() {
        if (!this.disabled) {
            this.active = !this.active;
            this.onToggleSwitch.emit(this.active);
            this.activeChange.emit(this.active);
        }
    }

    public toggleSwitchEnter() {
        if (this.focused && !this.disabled) {
            this.active = !this.active;
            this.onToggleSwitch.emit(this.active);
            this.activeChange.emit(this.active);
        }
    }
}
