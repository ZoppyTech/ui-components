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
});
