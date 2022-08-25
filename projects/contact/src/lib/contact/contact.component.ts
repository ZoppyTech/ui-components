import { Component, Input, OnInit } from '@angular/core';
import { VisualIdentityService } from '@lucarrloliveira/visual-identity';

@Component({
    selector: 'ps-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @Input() public name: string = ``;
    @Input() public email: string = ``;
    @Input() public tooltip: boolean = true;
    public bgColor: string = '#fff';
    public initials: string = '';
    public labelColor: Color = `light`;
    public hover: boolean = false;

    constructor(private readonly visualIdentityService: VisualIdentityService) {}

    ngOnInit() {
        this.initials = this.getNameInitials();
        this.bgColor = this.generateCodeFromName(this.email);
        this.labelColor = this.visualIdentityService.lightOrDark(this.bgColor) === `light` ? `dark` : `light`;
    }

    public getNameInitials(): string {
        if (!this.name) {
            return '';
        }
        const names = this.name.toUpperCase().trim().split(' ');
        if (names.length >= 2) {
            return names[0][0] + names[1][0];
        } else if (names[0].length >= 2) {
            return names[0][0] + names[0][1];
        }
        return names[0][0];
    }

    public generateCodeFromName(str: string = '') {
        try {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            let colour = '#';
            for (let i = 0; i < 3; i++) {
                const value = (hash >> (i * 8)) & 0xff;
                colour += ('00' + value.toString(16)).substr(-2);
            }
            return colour;
        } catch (exception) {
            return '#000000';
        }
    }
}

type Color = `light` | `dark`;
