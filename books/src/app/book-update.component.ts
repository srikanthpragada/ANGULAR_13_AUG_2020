import { Component, Input } from '@angular/core';
import { Book } from './Book';
import { BookUtils } from './BookUtils';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators'

@Component({
  templateUrl: 'book-update.component.html'
})
export class BookUpdateComponent {
  id: number;
  book: Book;
  done: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    
    // get book details 
    this.book = null;
    this.http.get<Book>(BookUtils.URL + "/" + this.id)
      .pipe(
        finalize(() => this.done = true)
      )
      .subscribe(
        resp => this.book = resp,
        error => this.book = null
      );
  }

  updateBook() {
    // call service 
    this.http.put(BookUtils.URL + "/" + this.book.Id, this.book)
      .subscribe(
        _ => alert("Book Updated!"),
        error => this.handleError(error)
      );
  }

  handleError(response) {
    console.log(response);
    alert("Sorry! Book could not be updated!");
    return Observable.throw(response.statusText);
  }

}   