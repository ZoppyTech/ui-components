import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@ZoppyTech/icon';
import { VisualIdentityModule } from '@ZoppyTech/visual-identity';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchBarComponent],
            imports: [FormsModule, IconModule, VisualIdentityModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shouldnt call actions if is disabled', () => {
        component.disabled = true;
        expect(component.setFocus(true)).toBeFalsy();
        expect(component.onSearchTextChanged('text')).toBeFalsy();
        expect(component.clearText()).toBeFalsy();
        expect(component.text).toEqual('');
    });

    it('should clean text', () => {
        component.searchText = 'this is a test';
        component.clearText();
        expect(component.searchText).toEqual('');
    });

    it('should set focus', () => {
        component.setFocus(true);
        expect(component.focus).toBeTruthy();
        component.setFocus(false);
        expect(component.focus).toBeFalsy();
    });
});
