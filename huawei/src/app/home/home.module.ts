import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToptextComponent } from './toptext/toptext.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BottomComponent } from './bottom/bottom.component';
import { BodyComponent } from './body/body.component';





@NgModule({
  declarations: [
    ToptextComponent, 
    SlideshowComponent, 
    BottomComponent, 
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToptextComponent,
    SlideshowComponent,
    BottomComponent,
    BodyComponent
  ]
})
export class HomeModule { }
