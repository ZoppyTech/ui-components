import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VisualIdentityService } from '@lucarrloliveira/visual-identity';

@Component({
    selector: 'ps-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() public type: Style = 'clean';
    @Input() public disabled: boolean = false;
    @Input() public wide: boolean = false;
    @Input() public round: boolean = false;
    @Input() public loading: boolean = false;
    @Input() public fixedHeight: boolean = true;
    @Output() onClick = new EventEmitter<boolean>();
    @ViewChild('buttonContainer') buttonContainer: any;

    public isDarkTheme: boolean = false;
    public darkLoading: any;
    public lightLoading: any;

    public constructor(private _sanitizer: DomSanitizer, private visualIdentityService: VisualIdentityService) {
        this.darkLoading = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + Loadings.dark);
        this.lightLoading = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + Loadings.light);
    }

    public ngOnInit(): void {
        this.initializeTheme();
    }

    public initializeTheme(): boolean {
        this.defineColorTheme();
        return true;
    }

    public click(): boolean {
        if (this.disabled || this.loading) return false;
        this.onClick.emit(true);
        return true;
    }

    public defineColorTheme(): boolean {
        const bgColor: any = this.getBgColor(this.buttonContainer?.nativeElement);
        const brightness: string = this.visualIdentityService.lightOrDark(bgColor);
        this.isDarkTheme = brightness === 'dark';
        return true;
    }

    public getBgColor(element: any): any {
        if (!element) return;
        return window.getComputedStyle(element, null).getPropertyValue('background-color');
    }
}

type Style =
    | 'clean'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'primary-border'
    | 'secondary-border'
    | 'tertiary-border'
    | 'quaternary-border'
    | 'success'
    | 'alert'
    | 'error';

export class Loadings {
    public static dark: string =
        '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';
    public static light: string =
        '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';
}
