import { TestBed } from '@angular/core/testing';

import { VisualIdentityService } from './visual-identity.service';

describe('VisualIdentityService', () => {
  let service: VisualIdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualIdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set root variables', () => {
    service.setVariables('#fff', '#fff', '#fff', '#fff', '#fff');

    const root: any = document.querySelector(':root');
    const style: any = getComputedStyle(root)

    expect('#fff').toEqual(style.getPropertyValue('--primary'));
    expect('#fff').toEqual(style.getPropertyValue('--secondary'));
    expect('#fff').toEqual(style.getPropertyValue('--alert'));
    expect('#fff').toEqual(style.getPropertyValue('--error'));
    expect('#fff').toEqual(style.getPropertyValue('--success'));
  })

  it('Light or dark method', () => {
    expect(service.lightOrDark('#fff')).toEqual('light');
    expect(service.lightOrDark('#000')).toEqual('dark');

    expect(service.lightOrDark('rgb(255, 255, 255)')).toEqual('light');
    expect(service.lightOrDark('rgb(0, 0, 0)')).toEqual('dark');
  })
});
