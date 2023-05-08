import { Component, Input, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'ps-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
    @Input() public file: File | null = null;
    @Input() public extensions: Extension[] = [];
    @Input() public title: string = '';
    @Input() public icon: string = 'icon-upload-doc';

    public subtitle: string = '';

    @ViewChild('fileDropRef') public fileDropRef: any;

    @Output() public fileChange: EventEmitter<any> = new EventEmitter();
    @Output() public invalidFileUploaded: EventEmitter<any> = new EventEmitter();

    public constructor() {}

    public onFileDropped($event: any) {
        if (!this.isValidExtension($event)) {
            this.invalidFileUploaded.emit();
            return;
        }
        this.file = $event;
        this.fileChange.emit(this.file);
    }

    public fileBrowseHandler($event: any) {
        this.onFileDropped($event.target.files[0]);
    }

    public ngOnInit(): void {
        const extensionsFormatted: string[] = this.extensions.map((ext: string) => ext.replace('.', ''));
        this.subtitle = 'Formatos de arquivo aceitos: ' + extensionsFormatted.join(', ');
    }

    public removeFile(): void {
        this.file = null;
        this.fileChange.emit(this.file);
    }

    public isValidExtension(file: File): boolean {
        switch (file.type) {
            case 'image/jpg':
                return this.extensions.includes('.jpg');
            case 'image/jpeg':
                return this.extensions.includes('.jpeg');
            case 'image/png':
                return this.extensions.includes('.png');
            case 'video/x':
                return this.extensions.includes('.avi');
            case 'video/mp4':
                return this.extensions.includes('.mp4');
            case 'video/mpeg':
                return this.extensions.includes('.mpeg');
            case 'video/ogg':
                return this.extensions.includes('.ogv');
            default:
                return false;
        }
    }
}

export type Extension = '.jpg' | '.jpeg' | '.png' | '.avi' | '.mp4' | '.mpeg' | '.ogv';
