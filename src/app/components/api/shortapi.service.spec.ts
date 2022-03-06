import { TestBed } from '@angular/core/testing';

import { ShortapiService } from './shortapi.service';

describe('ShortapiService', () => {
  let service: ShortapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
