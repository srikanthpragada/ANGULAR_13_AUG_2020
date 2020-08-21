import { Component } from '@angular/core';
import { WebBook } from './Webbook';
import { HttpClient} from '@angular/common/http';
 
@Component({
    selector : 'st-add-book',
    templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
    book : WebBook;
    done : boolean = false;
    inprocess : boolean = false;
    added : boolean = false; 
    
    constructor(private http: HttpClient) {
      this.book = new WebBook();
    }

    addBook()  {
          // call restful service  
          this.done = false;
          this.added = false; 
          this.inprocess = true; 
          this.http.post("http://test.srikanthpragada.com/api/books",this.book)
            .subscribe(result => this.added = true,
                       error => {
                            this.added = false;
                            this.done = true;
                            this.inprocess= false; 
                            console.log(error)
                       },
                       () => {
                           this.done = true; 
                           this.inprocess= false;
                        }
            );

                 
    }


}