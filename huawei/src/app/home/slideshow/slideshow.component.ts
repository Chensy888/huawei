import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})



export class SlideshowComponent{
  constructor(private router: Router){

  }
  goMate(){
    this.router.navigate(['/mate']);
  }

}
