import { Book } from './Book';

export class BookUtils {
    static URL: string = "http://test.srikanthpragada.com/api/books"

    static deleteBook(books: Book[], id: number) : boolean  {
        // find out book in the array and delete
        for (var i = 0; i < books.length; i++) {
            if (books[i].Id == id) {
                books.splice(i, 1);
                return true;
            }
        }
        return false;
    } // deleteBook 
}