import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BooksComponent } from './books/books.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

const routes: Routes = [
  { path:'books',component: BooksComponent },
  { path:'books/:id',component: BookDetailComponent },
  { path:'',redirectTo: '/books',pathMatch:'full' },
  { path:'shopping-list',component: ShoppingListComponent },
  { path:'search',component:SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
