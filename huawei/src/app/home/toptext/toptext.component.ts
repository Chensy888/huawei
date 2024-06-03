import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toptext',
  templateUrl: './toptext.component.html',
  styleUrl: './toptext.component.css'
})
export class ToptextComponent {
  constructor(
    private router:Router
  ){
    
  }

  @ViewChild("head") head!: ElementRef<HTMLParagraphElement>
  @ViewChild("search1_box") search1_box!: ElementRef<HTMLParagraphElement>
  search(){
    this.head.nativeElement.style.display = 'none';
    this.search1_box.nativeElement.style.display = 'block';
  }
  x(){
    this.search1_box.nativeElement.style.display = 'none';
    this.head.nativeElement.style.display = 'flex';
  }
  jump(){
    this.router.navigate(['/mate']);
  }
}
