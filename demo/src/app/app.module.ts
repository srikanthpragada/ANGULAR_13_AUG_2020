import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

// import { AppRoutingModule } from './app-routing.module';
 

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [CounterComponent ]
})
export class AppModule { }
