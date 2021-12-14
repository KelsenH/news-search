import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSearchComponent } from './news-search/news-search.component';

const routes: Routes = [
  { path: '', component: NewsSearchComponent },
  { path: 'search/:keyword', component: NewsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
