import { Component, Input } from '@angular/core';

@Component({
    selector: 'ps-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    @Input() public headerText: string = '';
    @Input() public bodyText: string = '';
    @Input() public footerText: string = '';
    @Input() public ctaLabel: string = '';
}
