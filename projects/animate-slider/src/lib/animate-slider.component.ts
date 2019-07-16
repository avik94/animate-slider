import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
@Component({
  selector: 'animate-slider',
  templateUrl: './animate-slider.component.html',
  styleUrls: ['./animate-slider.component.css'],
  animations:[
    trigger('animation',[      

      // all transition
      transition("void => rotate",[style({
        transform: "scaleX(-1)",
        opacity:0
      }),animate(1400)]),

      transition("void => slideFromLeft",[style({
        transform: "translateX(-1000px)",
        opacity:0
      }),animate(900)]),

      transition("void => slideFromLeftFast",[style({
        transform: "translateX(-1000px)",
        opacity:0
      }),animate(450)]),

      transition("void => slideFromRight",[style({
        transform: "translateX(1000px)",
        opacity:0
      }),animate(900)]),

      transition("void => slideFromRightFast",[style({
        transform: "translateX(1000px)",
        opacity:0
      }),animate(450)]),

      transition("void=> slideFromTop",[style({
        transform: "translateY(-1000px)",
        opacity:0
      }),animate(700)]),

      transition("void=> slideFromBottom",[style({
        transform: "translateY(300px)",
        opacity:0
      }),animate(700)]),

      transition("void=> fade",[style({
        opacity:0.5,
        fontSize: "20px",
      }),animate(900)]),

      transition("void=> zoomIn",[style({
        opacity:0.5,
        transform: "scale(1.5)"
      }),animate(900)]),
    ]),
  ]
})
export class AnimateSliderComponent implements OnInit {

  @Input() buttonOutline;
  @Input() buttonFill;
  @Input() captionText;
  @Input() slide;
  @Input() speed;
  @Input() height;
  @Input() autoPlay;
  @Input() textColor;
  @Input() buttontextColor;
  @Input() buttonBorderColor;
  @Input() buttonBackground;
 
  sliderHeight;
  captionHeight;
  indicatorHeight;
 
  ngOnInit(){
    this.sliderHeight = this.height+"vw";
    this.captionHeight = (this.height/2.5)-1+"vw";
    this.indicatorHeight = this.height-6+"vw";
    
    if(this.autoPlay === true){
      setInterval(()=>{
        if(this.slideCount === this.slide.length){
          this.slideCount = 0
        }
        this.slideCount = this.slideCount+1;                   
      },this.speed);  

    }
  }
  
  slideCount = 1;

  rightClick(){
    if(this.slideCount === this.slide.length){
      this.slideCount = 0
    }
    this.slideCount = this.slideCount+1;
  }

  leftClick(){
    if(this.slideCount === 1){
      this.slideCount = this.slide.length + 1
    }
    this.slideCount = this.slideCount - 1;
  }

}
