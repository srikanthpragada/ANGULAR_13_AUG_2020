import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryInfo } from './countryinfo';

@Component({
  selector: 'st-country',
  templateUrl: './countryinfo.component.html'
})
export class CountryinfoComponent implements OnInit {
  country : CountryInfo = null; 
  message : string = null;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  getInfo(code : string) {
      this.country = null;
      this.message = null;
      
      this.http.get<CountryInfo>("https://restcountries.eu/rest/v2/alpha/" + code)
                .subscribe( 
                   info => this.country = info,
                   e =>  {
                       this.message = "Country Not Found"
                   }
                  )
  }


}
