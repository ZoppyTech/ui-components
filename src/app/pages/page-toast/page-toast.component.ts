import { Component, OnInit } from '@angular/core';
import { ToastService } from 'projects/toast/src/lib/toast/toast.service';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-toast',
    templateUrl: './page-toast.component.html',
    styleUrls: ['./page-toast.component.scss']
})
export class PageToastComponent implements OnInit {
    public properties: Array<Property> = [];

    public constructor(public toast: ToastService) {}

    public ngOnInit(): void {
        console.log('do nothing');
    }

    public openToast(type: string): void {
        switch (type) {
            case 'success':
                return this.toast.success('this is a success toast', 'Success message');
            case 'alert':
                return this.toast.alert('this is a alert toast', 'Alert message');
            case 'error':
                return this.toast.error('this is a error toast', 'Error message');
        }
    }
}
