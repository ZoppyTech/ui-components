import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ps-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() public page: number = 1;
    @Input() public totalPages: number = 1;
    @Output() public onPageChanged: EventEmitter<number> = new EventEmitter();

    public constructor() {}

    public ngOnInit() {}

    public move(direction: Direction): void {
        if (direction === 'back') this.page -= 1;
        else this.page += 1;
        this.onPageChanged.emit(this.page);
    }
}

type Direction = 'back' | 'forward';
