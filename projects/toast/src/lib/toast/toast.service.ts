import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    public text: string = '';
    public title: string = '';
    public open: boolean = false;
    public type: string = '';
    public height: string = '';
    public constructor() {}
    success(text: string, title: string, time: number = 3) {
        this.type = 'success';
        this.send(text, title, time);
    }

    public alert(text: string, title: string, time: number = 3) {
        this.type = 'alert';
        this.send(text, title, time);
    }

    public error(text: string, title: string, time: number = 3) {
        this.type = 'error';
        this.send(text, title, time);
    }

    public send(text: string, title: string, time: number = 3) {
        this.text = text;
        this.title = title;
        this.open = true;

        setTimeout(() => {
            this.open = false;
        }, time * 1000);
    }
}
