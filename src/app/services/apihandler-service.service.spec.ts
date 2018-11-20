import { TestBed, inject } from '@angular/core/testing';

import { APIHandlerServiceService } from './apihandler-service.service';

describe('APIHandlerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIHandlerServiceService]
    });
  });

  it('should be created', inject([APIHandlerServiceService], (service: APIHandlerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
