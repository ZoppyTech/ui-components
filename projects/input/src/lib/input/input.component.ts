import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';

@Component({
    selector: 'ps-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {
    @Input() public ngModel: any = '';
    @Input() public mask: string = '';
    @Input() public type: string = 'text';
    @Input() public rows: number = 1;
    @Input() public maxCharactersAllowed: number | null = null;
    @Input() public debounce: number = 0;
    @Input() public disabled: boolean = false;
    @Input() public errors: Array<string> = [];
    @Input() public placeholder: string = '';
    @Input() public icon: string = '';
    @Input() public img: string = '';
    @Input() public iconColor: string = '';
    @Input() public showErrors: boolean = false;
    @Input() public selectAll: boolean = false;
    @Input() public moveMaskedCursor: boolean = true;
    @Input() public iconClick: boolean = false;
    @Input() public imgClick: boolean = false;
    @Output() public onFocus = new EventEmitter();
    @Output() public onBlur = new EventEmitter();
    @Output() public ngModelChange = new EventEmitter<any>();
    @Output() public onIconClicked: EventEmitter<void> = new EventEmitter();
    @Output() public onImgClicked: EventEmitter<void> = new EventEmitter();

    @ViewChild('input') public input?: ElementRef = undefined;
    @ViewChild('textArea') public textArea?: ElementRef = undefined;
    public domComponent?: ElementRef = undefined;
    public focus: boolean = false;
    public hover: boolean = false;

    constructor() {}

    public ngAfterViewInit() {
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

    public onTextChanged(text: any) {
        this.ngModelChange.emit(text);
    }

    public ngOnInit() {}

    public onModelChange(): void {
        if (this.disabled) return;
        this.ngModelChange.emit(this.ngModel);
    }

    public onInputFocus() {
        if (this.hover && !this.focus) {
            if (this.selectAll && this.input) this.input?.nativeElement.select();
            this.onFocus.emit();
            this.focus = true;
        }
        if (this.mask && this.moveMaskedCursor) this.moveCursorToStart();
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

    public iconClicked(): void {
        this.onIconClicked.emit();
    }

    public imgClicked(): void {
        this.onIconClicked.emit();
    }

    public defaultMasks(): boolean {
        return ['currency', 'percent'].includes(this.mask);
    }
}
