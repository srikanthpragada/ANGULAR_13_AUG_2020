import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RLoginComponent } from './forms/rlogin.component';
// import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
     RLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
