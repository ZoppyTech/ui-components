import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debug } from 'console';
import { fromEvent, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
    selector: 'ps-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    @Output() public onChanged = new EventEmitter();
    @Input() public text: string = '';
    @Input() public placeholder: string = '';
    @Input() public disabled: boolean = false;
    @Input() public debounce: number = 400;
    @Input() public searchStyle: Style = 'border';
    public searchText: string = '';
    public focus: boolean = false;
    public isHovered: boolean = false;

    @ViewChild('inputSearch') input?: ElementRef = undefined;

    public constructor() {}

    public ngAfterViewInit(): any {
        fromEvent(this.input?.nativeElement, 'input')
            .pipe(
                filter(Boolean),
                debounceTime(this.debounce),
                distinctUntilChanged(),
                tap(() => {
                    this.onChanged.emit(this.searchText);
                    return true;
                })
            )
            .subscribe();
    }

    public setFocus(focus: boolean): boolean {
        if (this.disabled) return false;
        this.focus = focus;
        return true;
    }

    public onSearchTextChanged(searchText: string): boolean {
        if (this.disabled || this.debounce !== 0) return false;
        this.onChanged.emit(searchText);
        return true;
    }

    public clearText(): boolean {
        if (this.disabled) return false;
        this.searchText = '';
        this.onChanged.emit(this.searchText);
        return true;
    }
}

type Style = 'border' | 'border-bottom';
