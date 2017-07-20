import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

//2. 在module中Import
//import * as $ from 'jquery';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
