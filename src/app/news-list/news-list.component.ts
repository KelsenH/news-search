import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Article } from '../core/models/article';
import { NewsService } from '../core/services/news.service';
import { SearchResponse } from '../core/models/search.response';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  articles$: Observable<Article[]>;
  totalResults$: Observable<number>;

  currentPage: number = 1;
  keyword: string;
  loading: boolean = false;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keyword = this.route.snapshot.paramMap.get('keyword') || '';
    this.search(this.keyword);
  }

  handlePageChange = (event: PageEvent): void => {
    this.currentPage = event.pageIndex + 1;
    this.search(this.keyword);
  };

  search = (keyword: string): void => {
    const searchResponse$ = this.newsService.searchNewsByKeyword(
      keyword,
      this.currentPage
    );
    this.articles$ = searchResponse$.pipe(
      map((response: SearchResponse) => response.articles)
    );
    this.totalResults$ = searchResponse$.pipe(
      map((response: SearchResponse) => response.totalResults)
    );
  };

  routeBackToSearch = ():void => {
    this.router.navigate([`/`]);
  };
}
