import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { MateComponent } from './pages/mate/mate.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { BottomComponent } from './home/bottom/bottom.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { ToptextComponent } from './home/toptext/toptext.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndentComponent } from './pages/indent/indent.component';
import { FormlyConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AffirmComponent } from './pages/affirm/affirm.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MateComponent,
    ShoppingComponent,
    BodyComponent,
    BottomComponent,
    SlideshowComponent,
    ToptextComponent,
    IndentComponent,
    AffirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
