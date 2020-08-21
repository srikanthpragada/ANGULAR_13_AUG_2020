import { Injectable } from "@angular/core";
import { WebBook } from '../http/Webbook';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BooksService {
    URL : string = "http://test.srikanthpragada.com/api/books";
    
    constructor(private http: HttpClient) {
    }

    getBooks() : Observable<WebBook[]>
    {
        return this.http.get<WebBook[]>(this.URL) 
                .pipe(
                   map((books : WebBook[]) => books.slice(0,5))                   
                );
    }

    getBook(id : number) : Observable<WebBook>
    {
        return this.http.get<WebBook>(this.URL + "/" + id);
    }
    
}