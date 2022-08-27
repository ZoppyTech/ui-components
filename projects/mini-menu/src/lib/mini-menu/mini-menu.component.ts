import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-mini-menu',
    templateUrl: './mini-menu.component.html',
    styleUrls: ['./mini-menu.component.scss']
})
export class MiniMenuComponent implements OnInit {
    @Input() public isOpen = false;
    @Input() public disabled = false;
    @Input() public closeOnClick = true;
    @Input() public icon: string | null = 'icon-Polygon-1';
    @Output() public onMenuOpened = new EventEmitter();
    @Output() public onMenuClosed: EventEmitter<void> = new EventEmitter<void>();

    public hover: boolean = false;
    public hoverIcon: boolean = false;

    public constructor() {}

    public ngOnInit() {}

    public menuOpened(): void {
        if (this.disabled) return;
        this.isOpen = true;
        this.onMenuOpened.emit();
    }
    public menuClosed(): void {
        if (this.disabled) return;
        this.isOpen = false;
        this.onMenuClosed.emit();
    }

    public toggleMenu(): void {
        if (this.disabled) return;
        this.isOpen = !this.isOpen;
        this.isOpen ? this.menuOpened() : this.menuClosed();
    }

    @HostListener('document:click')
    public clicked() {
        if (this.hover && this.closeOnClick) this.menuClosed();
        if (!this.hover && !this.hoverIcon) this.menuClosed();
    }
}
