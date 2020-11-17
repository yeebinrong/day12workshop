import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart.component';
import { MycartComponent } from './mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
