import { Observable, of } from 'rxjs';
import { SearchResponse } from '../models/search.response';

export class NewsServiceStub {
  searchNewsByKeyword(keyword: string, currentPage: number): Observable<SearchResponse> {
    return of({
      status: 'Okay',
      totalResults: 0,
      articles: [],
    });
  }
}
