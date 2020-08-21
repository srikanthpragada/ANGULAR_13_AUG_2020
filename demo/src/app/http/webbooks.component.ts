import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooksComponent implements OnInit {
    books: WebBook[];
    done : boolean = false;
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.done = false;
        this.http.get<WebBook[]>("http://test.srikanthpragada.com/api/books")
            .subscribe(
                 result => this.books = result,
                 error => console.log(error),
                 () => this.done = true
                 );
        
    }
}