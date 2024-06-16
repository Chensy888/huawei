import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../Service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit {
  mateData:any
  shopData:any=[];
  id: string = '';
  number = 1;
  setColor="雅丹黑";
  setVersion="12GB+512GB";
  colors = [
    "雅丹黑",
    "雅川青",
    "白沙银",
    "南糯紫"
  ]
  version = [
    "12GB+512GB",
    "12GB+1TB",
    "12GB+256GB",
  ]


  constructor(
    private http:HttpClient,
    private service:Service,
    private activatedroute:ActivatedRoute
  ){
    
  }

  getById(){
    this.http.get(`http://127.0.0.1:3000/mate/findById/${this.id}`).subscribe(res =>{
      this.mateData = res
      console.log(this.mateData)
    })
  }

  addShop(){
    this.shopData.push(this.mateData,this.setColor,this.setVersion,this.number)
    this.service.addService(this.shopData)
  }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id')!
    this.getById()
  }

  addnumber(){
    this.number++;
  }
  reducenumber(){
    if(this.number>1){
      this.number-- ;
    }
  }

  colorClick(color:any){
    this.setColor = color;
  }
  versionClick(version:any){
    this.setVersion = version
    if(this.setVersion == "12GB+1TB"){
      this.mateData.price = 4999
    }else if(this.setVersion == "12GB+256GB"){
      this.mateData.price = 3999
    }else{
      this.mateData.price = 7999
    }
  }

}
