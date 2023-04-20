import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfiniteScrollComponent } from './page-infinite-scroll.component';

describe('PageInfiniteScrollComponent', () => {
    let component: PageInfiniteScrollComponent;
    let fixture: ComponentFixture<PageInfiniteScrollComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageInfiniteScrollComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PageInfiniteScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
