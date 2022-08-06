import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VisualIdentityService {
    public constructor() {}

    public setVariables(
        neutral: Pallete,
        primary: Pallete,
        secondary: Pallete,
        tertiary: Pallete,
        quaternary: Pallete,
        success: string,
        info: string,
        warning: string,
        negative: string
    ): void {
        const root: any = document.querySelector(':root');
        root.style.setProperty('--neutral-800', neutral.color800);
        root.style.setProperty('--neutral-700', neutral.color700);
        root.style.setProperty('--neutral-600', neutral.color600);
        root.style.setProperty('--neutral-500', neutral.color500);
        root.style.setProperty('--neutral-400', neutral.color400);
        root.style.setProperty('--neutral-300', neutral.color300);
        root.style.setProperty('--neutral-200', neutral.color200);
        root.style.setProperty('--neutral-100', neutral.color100);

        root.style.setProperty('--primary-800', primary.color800);
        root.style.setProperty('--primary-700', primary.color700);
        root.style.setProperty('--primary-600', primary.color600);
        root.style.setProperty('--primary-500', primary.color500);
        root.style.setProperty('--primary-400', primary.color400);
        root.style.setProperty('--primary-300', primary.color300);
        root.style.setProperty('--primary-200', primary.color200);
        root.style.setProperty('--primary-100', primary.color100);
        root.style.setProperty('--primary', primary.colorDefault);

        root.style.setProperty('--secondary-800', secondary.color800);
        root.style.setProperty('--secondary-700', secondary.color700);
        root.style.setProperty('--secondary-600', secondary.color600);
        root.style.setProperty('--secondary-500', secondary.color500);
        root.style.setProperty('--secondary-400', secondary.color400);
        root.style.setProperty('--secondary-300', secondary.color300);
        root.style.setProperty('--secondary-200', secondary.color200);
        root.style.setProperty('--secondary-100', secondary.color100);
        root.style.setProperty('--secondary', secondary.colorDefault);

        root.style.setProperty('--tertiary-800', tertiary.color800);
        root.style.setProperty('--tertiary-700', tertiary.color700);
        root.style.setProperty('--tertiary-600', tertiary.color600);
        root.style.setProperty('--tertiary-500', tertiary.color500);
        root.style.setProperty('--tertiary-400', tertiary.color400);
        root.style.setProperty('--tertiary-300', tertiary.color300);
        root.style.setProperty('--tertiary-200', tertiary.color200);
        root.style.setProperty('--tertiary-100', tertiary.color100);
        root.style.setProperty('--tertiary', tertiary.colorDefault);

        root.style.setProperty('--quaternary-800', quaternary.color800);
        root.style.setProperty('--quaternary-700', quaternary.color700);
        root.style.setProperty('--quaternary-600', quaternary.color600);
        root.style.setProperty('--quaternary-500', quaternary.color500);
        root.style.setProperty('--quaternary-400', quaternary.color400);
        root.style.setProperty('--quaternary-300', quaternary.color300);
        root.style.setProperty('--quaternary-200', quaternary.color200);
        root.style.setProperty('--quaternary-100', quaternary.color100);
        root.style.setProperty('--quaternary', quaternary.colorDefault);

        root.style.setProperty('--success', success);
        root.style.setProperty('--info', info);
        root.style.setProperty('--warning', warning);
        root.style.setProperty('--negative', negative);
    }

    public lightOrDark(color: any = '') {
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

export class Pallete {
    public constructor(
        color800: string,
        color700: string,
        color600: string,
        color500: string,
        color400: string,
        color300: string,
        color200: string,
        color100: string,
        colorDefault: string = ''
    ) {
        this.color100 = color100;
        this.color200 = color200;
        this.color300 = color300;
        this.color400 = color400;
        this.color500 = color500;
        this.color600 = color600;
        this.color700 = color700;
        this.color800 = color800;
        this.colorDefault = colorDefault;
    }

    public color100: string = '';
    public color200: string = '';
    public color300: string = '';
    public color400: string = '';
    public color500: string = '';
    public color600: string = '';
    public color700: string = '';
    public color800: string = '';
    public colorDefault: string = '';
}
