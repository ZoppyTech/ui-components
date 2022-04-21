import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';

describe('RadioButtonComponent', () => {
    let component: RadioButtonComponent;
    let fixture: ComponentFixture<RadioButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RadioButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RadioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should identify if items are objects correctly', () => {
        component.items = [
            {
                name: 'test 1',
                value: 1
            },
            {
                name: 'test 2',
                value: 2
            },
            {
                name: 'test 3',
                value: 3
            }
        ];
        component.propertyLabel = 'name';
        component.propertyValue = 'value';

        component.ngOnInit();
        expect(component.itemsAreObjects).toBeTruthy();

        component.items = [
          'item 1',
          'item 2',
          'item 3',
        ]

        component.ngOnInit();
        expect(component.itemsAreObjects).toBeFalsy();
    });

    it('should set value on toggle radio button', () => {
      component.items = [
        {
          name: 'test 1',
          value: 1
        },
        {
          name: 'test 2',
          value: 2
        },
        {
          name: 'test 3',
          value: 3
        },
      ]
      component.propertyLabel = 'name';
      component.propertyValue = 'value';
      component.ngOnInit();
      component.onToggleRadioButton('test 2');
      expect(component.value).toEqual('test 2');
    });
});
