import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToptextComponent } from './toptext/toptext.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BottomComponent } from './bottom/bottom.component';
import { BodyComponent } from './body/body.component';
import { TopComponent } from './top/top.component';
import { ProgressComponent } from './progress/progress.component';





@NgModule({
  declarations: [
    ToptextComponent, 
    SlideshowComponent, 
    BottomComponent, 
    BodyComponent, TopComponent, ProgressComponent
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
