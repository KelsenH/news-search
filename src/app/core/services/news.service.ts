import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../models/search.response';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  searchNewsByKeyword(keyword: string, pageNumber: number): Observable<any> {
    return this.http.get(environment.newsApiUrl, {
      headers: {
        'x-Api-Key': environment.apiKey,
      },
      params: {
        q: keyword,
        sortBy: 'relevancy',
        pageSize: 10,
        page: pageNumber
      },
    });
  }
}
