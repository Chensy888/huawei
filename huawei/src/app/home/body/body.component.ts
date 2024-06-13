import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  computerData: any=[];
  phoneData: any=[];
  precinctData: any=[];

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.getAllList();
  }
  getAllList(){
    this.http.get('http://127.0.0.1:3000/computer/list').subscribe(res =>{
      this.computerData = res
    })

    this.http.get('http://127.0.0.1:3000/phone/list').subscribe(res =>{
      this.phoneData = res
    })

    this.http.get('http://127.0.0.1:3000/precinct/list').subscribe(res =>{
      this.precinctData = res
    })


  }
  getId(id:string){
    this.router.navigate(["/shopping",id])
    console.log(id)
  }
}
