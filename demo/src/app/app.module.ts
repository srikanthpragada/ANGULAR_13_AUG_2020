import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryinfoComponent } from './http/countryinfo/countryinfo.component';
// import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
    CountryinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [CountryinfoComponent]
})
export class AppModule { }
