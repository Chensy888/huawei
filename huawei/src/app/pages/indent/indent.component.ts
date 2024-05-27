import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';
import { map } from 'rxjs';

@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrl: './indent.component.css'
})
export class IndentComponent implements OnInit{
  totalprice:number=0;
  data:any;
  isAllSelect=false
  number:number=0
  serviceItems$ = this.service.serviceItems$



  constructor(
    private service : Service
  )
  {
    this.serviceItems$.pipe(map(item =>{
      return item
    })).subscribe(item =>{
      this.data=item
    })
  }
  
  
  ngOnInit(): void {
      this.data.map((i:any) => {
      this.totalprice += i[0].price*i[3]
      this.number += i[3]
    })
  
    
    // this.number=this.service.number
    // this.image=this.service.image;
    // this.name=this.service.name;
    // this.color=this.service.color;
    // this.version=this.service.version;
    // this.price=this.service.price;
  }
  allselectChange(){
    this.isAllSelect = !this.isAllSelect
  }

  reducenumber(id:any){
      this.data.map((i:any) =>{
        if(i[3]>1){
          if(i[0].id === id){
            i[3]--;
            this.totalprice -= i[0].price
            this.number--
          }
        }
      })
  }

  addnumber(id:any){
    this.data.map((i:any) =>{
      if(i[0].id === id){
        i[3]++
        this.totalprice += i[0].price
        this.number++
      }
    })
  }

  delete(id:any){
    //点击删除删除这条数据
    this.data.map((i:any) =>{
      if(i[0].id === id){
        this.data.splice(i,1)
        this.totalprice -= i[0].price;
        this.number--
      }
    })
  }
}