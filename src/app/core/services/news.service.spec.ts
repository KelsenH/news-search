import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;
  let mockHttpClient = {
    get: jasmine.createSpy('get')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchNewsByKeyword', () => {
    it('should call http get', () => {
      service.searchNewsByKeyword('test', 5);
      expect(mockHttpClient.get).toHaveBeenCalled();
    });
  });
});
