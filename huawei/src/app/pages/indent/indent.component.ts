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
  isSelect = false
  
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
    this.totalMoney = 0
    this.number = 0
    this.isAllSelect = !this.isAllSelect
    this.isSelect = !this.isSelect
    if(this.isAllSelect){
        this.data.map((i:any) =>{
          this.totalMoney += i[0].price*i[3]
          this.number += i[3]
      })     
    }else{
      this.totalMoney = 0
    }
  }
  getSelectMoney(id:any,isChecked:boolean){
    //this.selectItems.push(id);

    console.log(this.data)
    this.data.map((i:any) =>{
      if(i[0].id === id){
        if(isChecked){
          this.totalMoney += i[0].price*i[3]
          this.number += i[3]
        }else{
          this.totalMoney -= i[0].price*i[3]
          this.number -= i[3]
        }
      }
    })

    // if(this.selectItems.length === this.data.length){
    //   this.isAllSelect = true
    // }else{
    //   this.isAllSelect = false
    // }
  }

  reducenumber(id:any,isChecked:boolean){
    if(isChecked){
      this.data.map((i:any) =>{
        if(i[3]>1){
          if(i[0].id === id){
            i[3]--;
            this.number--
            this.totalMoney -=i[0].price
          }
        }
      })
    }   
  }

  addnumber(id:any,isChecked:boolean){
    if(isChecked){
      this.data.map((i:any) =>{
        if(i[0].id === id){
          i[3]++
          this.number++
          this.totalMoney +=i[0].price
        }
      })
    } 
  }

  delete(id:any){
    //点击删除删除这条数据
    this.data.map((i:any) =>{
      if(i[0].id === id){
        this.data.splice(i,1)
        this.number--
      }
    })
  }

}