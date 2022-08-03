import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';

@Component({
    selector: 'ps-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {
    @Input() public ngModel: string = '';
    @Input() public mask: string = '';
    @Input() public type: string = 'text';
    @Input() public rows: number = 1;
    @Input() public maxCharactersAllowed: number | null = null;
    @Input() public debounce: number = 0;
    @Input() public disabled: boolean = false;
    @Input() public errors: Array<string> = [];
    @Input() public placeholder: string = '';
    @Output() public onFocus = new EventEmitter();
    @Output() public onBlur = new EventEmitter();
    @Output() public ngModelChange = new EventEmitter<string>();

    @ViewChild('input') public input?: ElementRef = undefined;
    @ViewChild('textArea') public textArea?: ElementRef = undefined;
    public domComponent?: ElementRef = undefined;
    public focus: boolean = false;
    public hover: boolean = false;

    constructor() {}

    ngAfterViewInit() {
        if (!this.debounce) return;

        setTimeout(() => {
            this.domComponent = this.rows > 1 ? this.textArea : this.input;
            fromEvent(this.domComponent?.nativeElement, 'keyup')
                .pipe(
                    filter(Boolean),
                    debounceTime(this.debounce),
                    distinctUntilChanged(),
                    tap(() => {
                        this.onTextChanged(this.ngModel);
                    })
                )
                .subscribe();
        });
    }

    onTextChanged(text: string) {
        this.ngModelChange.emit(text);
    }

    ngOnInit() {}

    public onInputFocus() {
        if (this.hover && !this.focus) {
            this.onFocus.emit();
            this.focus = true;
        }
        if (this.mask) this.moveCursorToStart();
    }

    public moveCursorToStart(): void {
        setTimeout(() => {
            this.domComponent?.nativeElement?.setSelectionRange(0, 0);
        });
    }

    public onInputBlur() {
        if (this.focus) {
            this.onBlur.emit();
            this.focus = false;
        }
    }
}
