import { VisualIdentityService } from '@ZoppyTech/visual-identity';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ps-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {
    @Input() public options = {};
    @Output() public scrolled: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('anchor') public anchor: any;

    @Input() public loading: boolean = false;
    public darkLoading: any;

    private declare observer: IntersectionObserver;

    constructor(private host: ElementRef, private _sanitizer: DomSanitizer, private visualIdentityService: VisualIdentityService) {
        this.darkLoading = this._sanitizer.bypassSecurityTrustResourceUrl(LoadingsUrl.dark);
    }

    get element() {
        return this.host.nativeElement;
    }

    ngOnInit(): void {
        const options = {
            root: this.isHostScrollable() ? this.host.nativeElement : null,
            ...this.options
        };

        this.observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting && this.scrolled.emit();
        }, options);
    }

    ngAfterViewInit(): void {
        this.observer.observe(this.anchor.nativeElement);
    }

    private isHostScrollable() {
        const style = window.getComputedStyle(this.element);

        return style.getPropertyValue('overflow') === 'auto' || style.getPropertyValue('overflow-y') === 'scroll';
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }
}

export class LoadingsUrl {
    public static dark: string = `https://zoppy-public-dev.s3.amazonaws.com/imgs/loading.svg`;
    public static light: string = `https://zoppy-public-dev.s3.amazonaws.com/imgs/loading-white.svg`;
}
