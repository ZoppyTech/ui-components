import { TemplateRef } from '@angular/core';
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

  it('should not click when loading', () => {
    component.loading = true;
    expect(component.click()).toEqual(false);
  });

  it('initialize color theme', () => {
    const initSuccessful: boolean = component.initializeTheme();
    expect(initSuccessful).toEqual(true);
  });

  it('define color theme', () => {
    component.buttonContainer.nativeElement = null;
    const initSuccessful: boolean = component.defineColorTheme();
    component.getBgColor(null);
    component.getBgColor(document.createElement('div'));
    expect(initSuccessful).toEqual(true);
  });

});
