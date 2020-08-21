import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { HttpClient} from '@angular/common/http';

@Component({
    selector: 'st-countries',
    templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {
    countries : Country[] = null;
    
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
         // make AJAX request 
         this.http.get<Country[]>("https://restcountries.eu/rest/v2/all")
             .subscribe(
                        (resp : Country[]) => this.countries = resp,
                        (error) => console.log(error),
                        null
                       );
    }

}