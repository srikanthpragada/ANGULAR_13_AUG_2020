import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from './BooksService';

@Component({
    selector: 'st-books',
    providers : [BooksService],
    templateUrl: './webbooks2.component.html'
})
export class WebBooks2Component implements OnInit {
    books: WebBook[];
   
    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
       this.booksService.getBooks()
          .subscribe( (result : WebBook[]) => this.books = result);
    }
}