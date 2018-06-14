import { TestBed, inject } from '@angular/core/testing';

import { WarsService } from './wars.service';

describe('WarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarsService]
    });
  });

  it('should be created', inject([WarsService], (service: WarsService) => {
    expect(service).toBeTruthy();
  }));
});
