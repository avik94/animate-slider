# animated-slider

This is a powerfull responsive Angular7 slider with **animation** added

## Demo

Slider text font will be change with your project font

Checkout the Demo...[Click Here](https://animate-slider-1b4fd.firebaseapp.com/)

## Installation

To add the slider to your Angular project:

```
npm install animate-slider
```
Once installed, add the slider to your app.module.ts:

```
import { AnimateSliderModule } from "animate-slider";
 
...
 
@NgModule({
   
   imports: [

     AnimateSliderModule ,
    ...
   ]

})
export class AppModule {}
```
## Sample usage

```
@Component({...})
export class AppComponent {
  slides= [
    { 
      slideUrl: 'your image url',
      slideAnimation:"fade",
      text: "Your Text",
      textAnimation : "slideFromLeft",
      buttonText :"Your button text",
      buttonLink: "button link",
      buttonAnimation: "slideFormRight"
    },
    ...
    ...
}
```
   
  #### Don't change the object property name in the array**
  1. *slideAnimation* is used for **Slide animation**
  2. *textAnimation* is used for **Caption Text animation**
  3. *buttonAnimation* is used for **Button animation**
  4. *text* is used for **Caption Text**
  5. *slideUrl* is used for **Image**
  6. *buttonText* is used for **Button Text**
  7. *buttonLink* is used for **Button Link**  

if you don't want the **animation/anything** just remove the property from the object.

if you set button and text to false please remove all button or text property from your slide array for better performance.


  
And in template file app.component.html:

```
<animate-slider
    [button]= "true"
    [captionText] = "true"
    [slide] = "images"
    [autoPlay] = "false"
    [speed] = "1000"
    [height] = "40">
</animate-slider>
```
Boom!!   
That's All you have to do
## Documentation
*all important directives

| Directive     | value      |  Function |
| :----------    | :----------: | ----------: |
| [button]      | true/false | show & hide Button |
| [captionText] | true/false | show & hide Caption text |
| [slide]       | Array of your slide (*Mandatory*) | For each slider |
| [autoPlay]    | true/false (*optional*)| Auto rotate slide |
| [speed]    | number (*optional*)| Speed  |
| [height]    | number (*Mandatory*)| Slide height | 

height is calculated as **vh**. don't put value as **px**

## Available Animation
**[ slideFromRight ]**  
**[ slideFromRightFast ]**   
**[ slideFromLeft ]**    
**[ slideFromLeftFast ]**  
**[ slideFromTop ]**  
**[ slideFromBottom ]**  
**[ rotate ]**  
**[ fade ]**
    
(*More animation will be implemented soon)

## Important Note
You can add only external-link to the button, don't use Router Link.   
