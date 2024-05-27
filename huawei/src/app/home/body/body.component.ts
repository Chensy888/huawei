import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  computerData: any={data:[]};
  phoneData: any={data:[]};
  precinctData: any={data:[]};

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.getAllList();
  }
  getAllList(){
    this.http.get('http://localhost:4201/computer/getAllList').subscribe(res =>{
      this.computerData = res
    })

    this.http.get('http://localhost:4201/phone/getAllList').subscribe(res =>{
      this.phoneData = res
    })

    this.http.get('http://localhost:4201/precinct/getAllList').subscribe(res =>{
      this.precinctData = res
      console.log(res)
    })


  }
  getId(id:string){
    this.router.navigate(["/shopping",id])
    console.log(id)
  }
}
