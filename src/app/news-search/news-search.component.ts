import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search = (value: string): void => {
    this.router.navigate([`/search/${value}`]);
  };

}
