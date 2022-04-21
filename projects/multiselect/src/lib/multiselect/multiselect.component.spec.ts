import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from '@lucarrloliveira/button';
import { CheckboxModule } from '@lucarrloliveira/checkbox';
import { IconModule } from '@lucarrloliveira/icon';
import { SearchBarModule } from '@lucarrloliveira/search-bar';

import { MultiselectComponent } from './multiselect.component';

describe('MultiselectComponent', () => {
  let component: MultiselectComponent;
  let fixture: ComponentFixture<MultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectComponent ],
      imports: [
        ButtonModule,
        IconModule,
        SearchBarModule,
        CheckboxModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format items properly', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];

    component.init();
    expect(component.items).toEqual([
      {label: 'apple'},
      {label: 'grape'},
      {label: 'orange'}
    ]);
  });

  it('should check item is active correctly', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];
    component.values = [
      'apple'
    ]

    component.init();
    expect(component.checkItemActive({label: 'apple'})).toBeTruthy();
  });

  it('should toggle item correctly', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];
    component.values = [
      'apple'
    ]

    component.init();
    expect(component.toggleItem()).toBeTruthy();
  });

  it('should set items selected', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];
    component.values = [
      'apple'
    ]

    component.init();
    expect(component.setItemSelected({label: 'apple'})).toBeTruthy();
  });

  it('should set value selected label correctly', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];
    component.values = [
      'apple'
    ]

    component.init();
    expect(component.setValueSelectedLabel()).toEqual('apple');

    component.values = [
      'apple',
      'orange',
    ]
    expect(component.setValueSelectedLabel()).toEqual('2 Selected');
  });

  it('should set itens hidden', () => {
    component.items = [
      'apple',
      'grape',
      'orange'
    ];

    component.init();
    component.searchBarChanged('ra');
    expect(component.items.filter((item: any) => item.isHidden).length).toEqual(1);
  });
});
