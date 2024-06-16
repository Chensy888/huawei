import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mate',
  templateUrl: './mate.component.html',
  styleUrl: './mate.component.css'
})
export class MateComponent {
  mateData: any=[];
  minprice :string= ""
  maxprice :string= ""
  pageData: any

  // 在组件中定义每页显示的项目数量
  pageSize: number = 4;
  // 定义当前页数
  currentPage: number = 1;
  
  constructor(
    private http:HttpClient,
    private router:Router,
  ){
    this.getAllList();
    this.gitListByPage();
  }
  getAllList(){
    this.http.get(`http://localhost:3000/mate/list`).subscribe(res =>{
      this.mateData = res;
    })
  }
  gitListByPage(){
    this.http.get(`http://localhost:3000/mate/gitListByPage/${this.currentPage}/${this.pageSize}`).subscribe(res =>{
      this.pageData = res;
      this.maxprice = ""
      this.minprice = ""
    })
  }
  sortByComment(){
    this.http.get(`http://localhost:3000/mate/sortByComment/${this.currentPage}/${this.pageSize}`).subscribe(res =>{
      this.pageData = res;
      this.maxprice = ""
      this.minprice = ""
    })
  }

  sortByPrice(){
    this.http.get(`http://localhost:3000/mate/sortByPrice/${this.minprice}/${this.maxprice}/${this.currentPage}/${this.pageSize}`).subscribe(res =>{
      this.pageData = res;
      this.mateData = res;
    })
  }

  getId(id:string){
    this.router.navigate(["/shopping",id])
    console.log(id)
  }

  onInputChange(event: any) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
  
    // 过滤掉非数字字符
    const filteredValue = inputValue.replace(/[^0-9]/g, '');
    
    // 更新输入框的值
    inputElement.value = filteredValue;
  }


  // 定义函数来处理页数更改
  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.gitListByPage();
    this.sortByComment();
  }
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.mateData.length / this.pageSize);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
    
  }
  
}
