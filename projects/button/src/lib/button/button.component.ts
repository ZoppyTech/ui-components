import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VisualIdentityService } from '@ZoppyTech/visual-identity';

@Component({
    selector: 'ps-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {
    @Input() public type: Style = 'clean';
    @Input() public disabled: boolean = false;
    @Input() public wide: boolean = false;
    @Input() public round: boolean = false;
    @Input() public loading: boolean = false;
    @Input() public fixedHeight: boolean = true;
    @Input() public loadingText: string = '';
    @Input() public theme: string = '';
    @Output() onClick = new EventEmitter<boolean>();
    @ViewChild('buttonContainer') buttonContainer: any;

    public isDarkTheme: boolean = false;
    public darkLoading: any;
    public lightLoading: any;

    public constructor(private _sanitizer: DomSanitizer, private visualIdentityService: VisualIdentityService) {
        this.darkLoading = this._sanitizer.bypassSecurityTrustResourceUrl(Loadings.dark);
        this.lightLoading = this._sanitizer.bypassSecurityTrustResourceUrl(Loadings.light);
    }
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.initializeTheme();
        }, 1000);
    }

    public ngOnInit(): void {}

    public initializeTheme(): void {
        this.defineColorTheme();
    }

    public click(): boolean {
        if (this.disabled || this.loading) return false;
        this.onClick.emit(true);
        return true;
    }

    public defineColorTheme(): void {
        if (this.theme) {
            this.isDarkTheme = this.theme === 'dark';
            return;
        }
        const bgColor: any = this.getBgColor(this.buttonContainer?.nativeElement);
        const brightness: string = this.visualIdentityService.lightOrDark(bgColor);
        this.isDarkTheme = brightness !== 'dark' || this.type === 'clean';
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
    | 'cancel'
    | 'primary-border'
    | 'secondary-border'
    | 'tertiary-border'
    | 'quaternary-border'
    | 'cancel-border'
    | 'success'
    | 'alert'
    | 'error';

export class Loadings {
    public static dark: string = `https://zoppy-public-dev.s3.amazonaws.com/imgs/loading.svg`;
    public static light: string = `https://zoppy-public-dev.s3.amazonaws.com/imgs/loading-white.svg`;
}
