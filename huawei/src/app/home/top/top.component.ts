import { Component } from '@angular/core';
import { Service } from '../../pages/Service';
import { map } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  number:number = 0;
  serviceItems$ = this.service.serviceItems$
  data: any;
  constructor(
    private service : Service
  )
  {
    this.serviceItems$.pipe(map(item =>{
      return item
    })).subscribe(item =>{
      this.data=item
      this.number = item.length
    })
  }
  
}
