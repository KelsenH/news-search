import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsService } from '../core/services/news.service';
import { NewsServiceStub } from '../core/services/news.service.mock';

import { NewsListComponent } from './news-list.component';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsServiceStub = new NewsServiceStub();
  let newsServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{provide: NewsService, useValue: newsServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    newsServiceSpy = spyOn(newsServiceStub, 'searchNewsByKeyword').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handlePageChange', () => {
    it('should set current page', () => {
      component.handlePageChange({pageIndex: 1, pageSize: 10, length: 100});
      expect(component.currentPage).toEqual(2);
    });
  });

  describe('search', () => {
    it('should call news service search', () => {
      component.currentPage = 0;
      component.search('test');
      expect(newsServiceSpy).toHaveBeenCalledWith('test', 0);
    });
  });
});
