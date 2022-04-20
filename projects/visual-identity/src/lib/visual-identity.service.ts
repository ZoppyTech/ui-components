import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VisualIdentityService {
    public constructor() {}

    public setVariables(
        primaryColor: string = '#BF2009',
        secondaryColor: string = '',
        alertColor: string = '',
        errorColor: string = '',
        successColor: string = '',
        highlightColor: string = ''
    ): void {
        const root: any = document.querySelector(':root');
        root.style.setProperty('--primary', primaryColor);
        root.style.setProperty('--secondary', secondaryColor);
        root.style.setProperty('--alert', alertColor);
        root.style.setProperty('--error', errorColor);
        root.style.setProperty('--success', successColor);
        root.style.setProperty('--highlight', highlightColor);

        root.style.setProperty('--dark-primary', this.shadeColor(primaryColor, -20));
        root.style.setProperty('--dark-secondary', this.shadeColor(secondaryColor, -20));
        root.style.setProperty('--dark-alert', this.shadeColor(alertColor, -20));
        root.style.setProperty('--dark-error', this.shadeColor(errorColor, -20));
        root.style.setProperty('--dark-success', this.shadeColor(successColor, -20));
        root.style.setProperty('--dark-highlight', this.shadeColor(highlightColor, -20));

        root.style.setProperty('--light-primary', this.shadeColor(primaryColor, 20));
        root.style.setProperty('--light-secondary', this.shadeColor(secondaryColor, 20));
        root.style.setProperty('--light-alert', this.shadeColor(alertColor, 20));
        root.style.setProperty('--light-error', this.shadeColor(errorColor, 20));
        root.style.setProperty('--light-success', this.shadeColor(successColor, 20));
        root.style.setProperty('--light-highlight', this.shadeColor(highlightColor, 20));
    }

    public lightOrDark(color: any) {
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

        const result: string = hsp > 180 ? 'light' : 'dark';
        return result;
    }

    public shadeColor(color: any, percent: number): string {
        const result: string =
            '#' +
            color
                .replace(/^#/, '')
                .replace(/../g, (color: any) => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + percent)).toString(16)).substr(-2));
        return result;
    }
}
