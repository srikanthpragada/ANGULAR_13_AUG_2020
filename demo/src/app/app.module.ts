import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './http/countries.component';
// import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
