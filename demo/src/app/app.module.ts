import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';
// import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  declarations: [
     ProductsListComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductsListComponent]
})
export class AppModule { }
