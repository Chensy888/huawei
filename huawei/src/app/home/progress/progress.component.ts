import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnInit{
  currentStep: number = 1;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateProgressBar(event.url);
      }
    });
  }

  ngOnInit(): void {}

  updateProgressBar(url: string): void {
    if (url.includes('indent')) {
      this.currentStep = 1;
    } else if (url.includes('affirm')) {
      this.currentStep = 2;
    } else if (url.includes('success')) {
      this.currentStep = 3;
    }
  }
}
