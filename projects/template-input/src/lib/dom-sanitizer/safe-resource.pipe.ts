import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'safeResource' })
export class SafeResourcePipe implements PipeTransform {
    public constructor(private sanitizer: DomSanitizer) {
        //no content
    }

    public transform(style: any): SafeHtml {
        return this.sanitizer.bypassSecurityTrustResourceUrl(style);
    }
}
