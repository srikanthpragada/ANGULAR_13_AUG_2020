import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { RatingsComponent } from './ratings/ratings.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [BindingsComponent]
})
export class AppModule { }
