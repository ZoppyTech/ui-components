import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';
import { ButtonModule } from '@ZoppyTech/button';
import { IconModule } from '@ZoppyTech/icon';
import { SearchBarModule } from '@ZoppyTech/search-bar';
import { CheckboxModule } from '@ZoppyTech/checkbox';

describe('MultiSelectComponent', () => {
    let component: MultiSelectComponent;
    let fixture: ComponentFixture<MultiSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MultiSelectComponent],
            imports: [ButtonModule, IconModule, SearchBarModule, CheckboxModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MultiSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should format items properly', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];

        initComponent();
        expect(component.items).toEqual([{ label: 'apple' }, { label: 'grape' }, { label: 'orange' }]);
    }));

    it('should check item is active correctly', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];
        component.values = ['apple'];

        initComponent();
        expect(component.checkItemActive({ label: 'apple' })).toBeTruthy();
    }));

    it('should toggle item correctly', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];
        component.values = ['apple'];

        initComponent();
        component.toggleItem(true, { label: 'grape' });
        expect(component.values).toEqual(['apple', 'grape']);

        component.toggleItem(false, { label: 'grape' });
        expect(component.values).toEqual(['apple']);
    }));

    it('should set items selected', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];
        component.values = ['apple'];

        initComponent();
        expect(component.setItemSelected({ label: 'apple' })).toBeTruthy();
    }));

    it('should set value selected label correctly', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];
        component.values = ['apple'];

        initComponent();
        expect(component.setValueSelectedLabel()).toEqual('apple');

        component.values = ['apple', 'orange'];
        expect(component.setValueSelectedLabel()).toEqual('2 Selecionados');
    }));

    it('should set itens hidden', fakeAsync(() => {
        component.items = ['apple', 'grape', 'orange'];

        initComponent();
        component.searchBarChanged('ra');
        expect(component.items.filter((item: any) => item.isHidden).length).toEqual(1);
    }));

    function initComponent() {
        component.init();
        tick();
    }
});
