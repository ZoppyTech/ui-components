import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/components/utilization/utilization.component';

@Component({
    selector: 'app-page-infinite-scroll',
    templateUrl: './page-infinite-scroll.component.html',
    styleUrls: ['./page-infinite-scroll.component.scss']
})
export class PageInfiniteScrollComponent implements OnInit {
    public properties: Array<Property> = [];
    public cardCounter = 0;
    public simulationCounter = 0;
    public cards: Array<any> = new Array<any>();
    public isLoading = false;

    public constructor() {}

    public ngOnInit(): void {
        this.isLoading = true;
        setTimeout(() => {
            for (let i: number = 0; i < 6; ++i) {
                this.cards.push({ title: `Title Card ${this.cardCounter++}`, text: 'Infinite scroll is amazing ;)' });
            }
            this.simulationCounter++;
            this.isLoading = false;
        }, 2000);
    }

    public onScroll(): boolean {
        if (this.simulationCounter === 0) {
            return true;
        }
        if (this.simulationCounter === 5) {
            return true;
        }
        this.simulationCounter++;
        this.isLoading = true;
        setTimeout(() => {
            for (let i: number = 0; i < 2; ++i) {
                this.cards.push({ title: `Title Card ${this.cardCounter++}`, text: 'Infinite scroll is amazing ;)' });
            }
            this.isLoading = false;
        }, 1000);
        return true;
    }
}
