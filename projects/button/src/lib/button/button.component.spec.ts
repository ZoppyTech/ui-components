import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click', () => {
    expect(component.click()).toEqual(true);
  });

  it('should not click when disabled', () => {
    component.disabled = true;
    expect(component.click()).toEqual(false);
  });

  it('should define dark theme', () => {
    component.lightOrDark('#000');
    expect(component.isDarkTheme).toBeFalsy();
  });

  it('should define light theme', () => {
    component.lightOrDark('#fff');
    expect(component.isDarkTheme).toBeFalsy();
  });
});
