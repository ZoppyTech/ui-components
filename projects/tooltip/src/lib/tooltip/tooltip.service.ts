import { ElementRef, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TooltipService {
    public width: number = 0;
    public tooltipText: string = '';
    public tooltipParent: any;
    public direction: string = '';
    public directions = {
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right'
    };
    public window: any;
    public tooltipStyle: any;
    public arrowStyle: any;
    public isOpen = false;

    show(el: ElementRef, tooltipText: string, width: number, tooltipDirection: string, tooltipHidden: boolean) {
        if (!tooltipHidden) {
            this.tooltipParent = el.nativeElement.getBoundingClientRect();
            this.direction = tooltipDirection;
            this.width = width;
            this.window = el.nativeElement.ownerDocument.defaultView.window;
            this.tooltipText = tooltipText;
            this.definePosition();
            this.isOpen = true;
        }
    }

    hide() {
        this.isOpen = false;
    }

    definePosition() {
        setTimeout(() => {
            if (!this.tooltipParent) {
                return;
            }

            switch (this.direction) {
                case this.directions.up:
                    this.setPositionUp();
                    break;
                case this.directions.down:
                    this.setPositionDown();
                    break;
                case this.directions.left:
                    this.setPositionLeft();
                    break;
                case this.directions.right:
                    this.setPositionRight();
                    break;
                default:
                    this.setPositionDown();
                    break;
            }
        });
    }

    setPositionUp() {
        const parentWidth = this.tooltipParent.width;
        const verticalOffset = this.tooltipParent.top;
        const horizontalOffset = this.tooltipParent.left;
        const transformOffset = this.getTrasformOffset(horizontalOffset, parentWidth);

        this.tooltipStyle = {
            bottom: `+${this.window.innerHeight - verticalOffset + 5}px`,
            left: `+${horizontalOffset + parentWidth / 2 - this.width / 2}px`,
            width: `${this.width}px`,
            transform: `translateX(${transformOffset}px)`
        };

        this.arrowStyle = {
            top: `+${verticalOffset - 10}px`,
            left: `+${horizontalOffset + parentWidth / 2 - 5}px`,
            transform: 'rotate(45deg)'
        };
    }
    setPositionDown() {
        const parentWidth = this.tooltipParent.width;
        const verticalOffset = this.tooltipParent.bottom;
        const horizontalOffset = this.tooltipParent.left;
        const transformOffset = this.getTrasformOffset(horizontalOffset, parentWidth);

        this.tooltipStyle = {
            top: `+${verticalOffset + 10}px`,
            left: `+${horizontalOffset + parentWidth / 2 - this.width / 2}px`,
            width: `${this.width}px`,
            transform: `translateX(${transformOffset}px)`
        };

        this.arrowStyle = {
            top: `+${verticalOffset + 5}px`,
            left: `+${horizontalOffset + parentWidth / 2 - 5}px`,
            transform: 'rotate(45deg)'
        };
    }

    setPositionLeft() {
        const parentHeight = this.tooltipParent.height;
        const verticalOffset = this.tooltipParent.top;
        const horizontalOffset = this.tooltipParent.left;

        this.tooltipStyle = {
            top: `+${verticalOffset + parentHeight / 2 - 20}px`,
            left: `+${horizontalOffset - this.width - 5}px`,
            width: `${this.width}px`
        };

        this.arrowStyle = {
            top: `+${verticalOffset + parentHeight / 2 - 5}px`,
            left: `+${horizontalOffset - 10}px`,
            transform: 'rotate(45deg)'
        };
    }

    setPositionRight() {
        const parentHeight = this.tooltipParent.height;
        const parentWidth = this.tooltipParent.width;
        const verticalOffset = this.tooltipParent.top;
        const horizontalOffset = this.tooltipParent.left;

        this.tooltipStyle = {
            top: `+${verticalOffset + parentHeight / 2 - 20}px`,
            left: `+${horizontalOffset + parentWidth + 5}px`,
            width: `${this.width}px`
        };

        this.arrowStyle = {
            top: `+${verticalOffset + parentHeight / 2 - 5}px`,
            left: `+${horizontalOffset + parentWidth}px`,
            transform: 'rotate(45deg)'
        };
    }

    getTrasformOffset(horizontalOffset: number, parentWidth: number): number {
        const rightOverflow =
            this.window.innerWidth < horizontalOffset + parentWidth / 2 + this.width / 2
                ? horizontalOffset + parentWidth / 2 + this.width / 2 - this.window.innerWidth
                : 0;
        const leftOverflow =
            horizontalOffset + parentWidth / 2 - this.width / 2 < 0 ? 0 - (horizontalOffset + parentWidth / 2 - this.width / 2) : 0;
        return -rightOverflow - leftOverflow;
    }
}
