import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
    selector: 'ps-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
    public observer: MutationObserver | undefined = undefined;
    constructor(public toast: ToastService, private elementRef: ElementRef) {}

    public ngOnInit(): void {}

    public close(): void {
        this.toast.open = false;
    }
}
