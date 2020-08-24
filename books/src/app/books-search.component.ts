import { Component } from '@angular/core';
import { Book } from './Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient} from "@angular/common/http"
import { finalize } from 'rxjs/operators';
import { BookUtils } from './BookUtils';

@Component({
    templateUrl: 'books-list.component.html'
})
export class BooksSearchComponent {
    title: string;
    books: Book[];
    done : boolean;

    constructor(private route: ActivatedRoute, private router: Router, 
           private http: HttpClient) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => 
            {
            this.title = params["title"];
            this.done = false;  
            this.http.get<Book[]>(BookUtils.URL)
               .pipe(
                   finalize( () => this.done = true)
               )
               .subscribe( 
                   (resp : Book[] ) => 
                   {
                    let books = resp;
                    // filter books
                    this.books = books.filter(b => b.Title.indexOf(this.title) >= 0);
                   }, 
                )  // subscribe
        });
    }

    deleteBook(id: number) {
        var resp = confirm("Do you want to delete book with id [" + id + "] ?");
        if (resp) {
            this.http.delete(BookUtils.URL + "/" + id)
                .subscribe(
                 _ => BookUtils.deleteBook(this.books, id)  
                ,
                (ex) => alert("Sorry! Could not delete book!"),
            )
        }
    }

    updateBook(id : number) {
        this.router.navigate(["update", id]);
    }


}