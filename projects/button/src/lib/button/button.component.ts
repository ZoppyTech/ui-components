import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'ps-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
    @Input() public type: Style = 'clean';
    @Input() public disabled: boolean = false;
    @Input() public wide: boolean = false;
    @Input() public round: boolean = false;
    @Input() public loading: boolean = false;
    @Output() onClick = new EventEmitter<boolean>();
    @ViewChild('buttonContainer') buttonContainer: any;

    public isDarkTheme: boolean = false;

    public constructor() {}

    public ngAfterViewInit(): void {
        this.defineColorTheme();
    }

    public click() {
        if (this.disabled) {
            return;
        }
        this.onClick.emit(true);
    }

    private defineColorTheme() {
        const bgColor: any = this.getBgColor(this.buttonContainer?.nativeElement);
        const brightness: string = this.lightOrDark(bgColor);
        this.isDarkTheme = brightness === 'dark';
    }

    private getBgColor(element: any): any {
        return window.getComputedStyle(element, null).getPropertyValue('background-color');
    }

    private lightOrDark(color: any) {
        let r: number, g: number, b: number;

        if (color.match(/^rgb/)) {
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            r = color[1];
            g = color[2];
            b = color[3];
        } else {
            color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
            r = color >> 16;
            g = (color >> 8) & 255;
            b = color & 255;
        }

        let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
        hsp = Math.round(hsp);

        if (hsp > 180) return 'light';
        else return 'dark';
    }
}

type Style = 'clean' | 'primary' | 'secondary';
