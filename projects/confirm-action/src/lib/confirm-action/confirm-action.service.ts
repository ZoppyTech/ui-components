import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfirmActionService {
    public isOpen: boolean = false;
    public title: string = ``;
    public text: string = ``;
    private callback?: any;

    public constructor() {
        console.log(`instantiate`);
    }

    public open(title: string, text: string, callback: any): void {
        debugger;
        this.isOpen = true;
        this.title = title;
        this.text = text;
        this.callback = callback;
    }

    public close(): void {
        this.isOpen = false;
        this.title = '';
        this.text = '';
        this.callback = null;
    }

    public confirm(): void {
        if (this.callback) this.callback(true);
        this.close();
    }

    public refuse(): void {
        if (this.callback) this.callback(false);
        this.close();
    }
}
