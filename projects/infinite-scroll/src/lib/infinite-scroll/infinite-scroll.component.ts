import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'ps-infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {
    @Input() public options = {};
    @Output() public scrolled: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('anchor') public anchor: any;

    private declare observer: IntersectionObserver;

    constructor(private host: ElementRef) {}

    get element() {
        return this.host.nativeElement;
    }

    ngOnInit(): void {
        const options = {
            root: this.isHostScrollable() ? this.host.nativeElement : null,
            ...this.options,
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



