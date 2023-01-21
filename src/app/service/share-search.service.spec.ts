import { TestBed } from '@angular/core/testing';

import { ShareSearchService } from './share-search.service';

describe('ShareSearchService', () => {
  let service: ShareSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
