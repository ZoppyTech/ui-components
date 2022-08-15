import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
    selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
    @Input() tooltipText = 'tooltip';
    @Input() tooltipWidth = '140';
    @Input() tooltipDirection = 'down';
    @Input() tooltipHidden = false;

    parentScroll: any;

    constructor(public el: ElementRef, public tooltip: TooltipService) {}

    ngOnDestroy(): void {
        this.destroyTooltipEvents();
    }

    ngOnInit(): void {
        this.parentScroll = this.getScrollParent(this.el.nativeElement);
        this.createTooltipEvents();
    }
    createTooltipEvents() {
        this.el.nativeElement.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.el.nativeElement.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.parentScroll?.nativeElement.addEventListener('scroll', this.onMouseLeave.bind(this));
    }

    destroyTooltipEvents() {
        this.el.nativeElement.removeEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.el.nativeElement.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.el.nativeElement.removeEventListener('removeEventListener', this.onMouseLeave.bind(this));
        this.parentScroll?.removeEventListener('scroll', this.onMouseLeave.bind(this));
    }

    getScrollParent(node: any): any {
        if (!node) {
            return null;
        }

        if (node.scrollHeight > node.clientHeight) {
            return node;
        }
        this.getScrollParent(node.parentNode);
    }

    onMouseEnter() {
        this.tooltip.show(this.el, this.tooltipText, Number(this.tooltipWidth), this.tooltipDirection, this.tooltipHidden);
        this.el.nativeElement.addEventListener('click', this.onMouseLeave.bind(this));
    }

    onMouseLeave() {
        this.tooltip.hide();
        this.el.nativeElement.removeEventListener('click', this.onMouseLeave.bind(this));
    }

    onScroll() {
        this.getScrollParent(this.el.nativeElement);
    }
}
