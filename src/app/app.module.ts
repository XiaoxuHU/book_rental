import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { InMemBookService } from './mock-data';
import { RatesComponent } from './shared/rates/rates.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    RatesComponent,
    ShoppingListComponent,
    DatePickerComponent,
    BooksComponent,
    SearchComponent,
    BookCardComponent,
    HeaderComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemBookService)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
