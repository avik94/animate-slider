import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimateSliderModule } from "animate-slider";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimateSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
