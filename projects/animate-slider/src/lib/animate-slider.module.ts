import { NgModule } from '@angular/core';
import { AnimateSliderComponent } from './animate-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AnimateSliderComponent],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [AnimateSliderComponent]
})
export class AnimateSliderModule { }
