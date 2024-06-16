import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-indent',
  templateUrl: './indent.component.html',
  styleUrl: './indent.component.css'
})
export class IndentComponent{
  data:any;

  serviceItems$ = this.service.serviceItems$

  selectItems:any[]=[]
  totalMoney:number=0 
  number:number=0

  indeterminate:boolean = true
  isAllSelect = false

  
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
  allselectChange(){
    this.indeterminate = !this.indeterminate
  
    this.totalMoney = 0
    this.number = 0
 
    if(this.isAllSelect){
        this.data.map((i:any) =>{
          i[4] = true
          this.totalMoney += i[0][0].price*i[3]
          this.number += i[3]
      })     
    }
    
    else{
      this.data.map((i:any) =>{
        i[4] = false
      })
      this.totalMoney = 0
    }
  }
  getSelect(id:any){
    this.data.map((i:any) =>{  
      if(i[0][0].id === id){
        if(i[4]){
          this.totalMoney += i[0][0].price*i[3]
          this.number += i[3]
        }else{
          this.totalMoney -= i[0][0].price*i[3]
          this.number -= i[3]
        }
      }
    })

    if(this.data.every((i:any) => i[4])){
      this.isAllSelect = true
      this.indeterminate = false
    }
    else if(this.data.every((i:any) => !i[4])){
      this.isAllSelect = false
      this.indeterminate = true
    }else{
      this.indeterminate = true
    }

  }

  reducenumber(id:any){
    this.data.map((i:any) =>{
      if(i[4]){
        this.data.map((i:any) =>{
          if(i[3]>1){
            if(i[0][0].id === id){
              i[3]--;
              this.number--
              this.totalMoney -=i[0][0].price
            }
          }
        })
      }   
    })
    
  }

  addnumber(id:any){
    this.data.map((i:any) =>{
      if(i[4]){
        this.data.map((i:any) =>{
          if(i[0][0].id === id){
            i[3]++
            this.number++
            this.totalMoney +=i[0][0].price
          }
        })
      } 
    })
  }

  delete(id:any){
    //点击删除删除这条数据
    this.data.map((i:any) =>{
      if(i[0][0].id === id){
        this.data.splice(i,1)
        this.number--
      }
    })
  }

}