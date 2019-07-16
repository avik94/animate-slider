import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-slider';
  images = [
    { 
      slideUrl: 'assets/slide1.jpg',
      slideAnimation:"fade",
      text: "Powerful Animated Angular Slider Animated Angular Animated Angular Slider Animated Angular Slider",
      textAnimation : "zoomIn",
      buttonText :"Click Me",
      buttonLink: "#",
      buttonAnimation: "slideFromRight"
    },
    { 
      slideUrl: 'assets/slide2.jpg',
      slideAnimation:"slideFromRight",
      text: "Powerful Animated Angular Slider Animated Angular Animated Angular Slider Animated Angular Slider",
      buttonText :"Click Me",
      textAnimation : "fade",
      buttonLink: "#",
      buttonAnimation: "rotate"
    },
    { 
      slideUrl: 'assets/slide3.jpg',
      slideAnimation:"fade",
      text: "Powerful Animated Angular Slider Animated Angular Animated Angular Slider Animated Angular Slider",
      buttonText :"Click Me",
      textAnimation : "slideFromLeft",
      buttonLink: "#",
      buttonAnimation: "slideFromLeftFast"
    },
    {
      slideUrl: 'assets/slide4.jpg',
      slideAnimation:"slideFromTop",
      text: "Powerful Animated Angular Slider Animated Angular Animated Angular Slider Animated Angular Slider",
      buttonText :"Click Me",
      textAnimation : "rotate",
      buttonLink: "#",
      buttonAnimation: "slideFromBottom"
    },
    {
      slideUrl: 'assets/slide5.jpg',
      slideAnimation:"fade",
      text: "Powerful Animated Angular Slider Animated Angular Animated Angular Slider Animated Angular Slider",
      buttonText :"Click Me",
      textAnimation : "slideFromRight",
      buttonLink: "#",
      buttonAnimation: "slideFromRightFast"
    }
  ]  
}
