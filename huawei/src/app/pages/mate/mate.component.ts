import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-mate',
  templateUrl: './mate.component.html',
  styleUrl: './mate.component.css'
})
export class MateComponent {
  mateData: any={data:[]};
  minprice :string= ""
  maxprice :string= ""
  pagedData: any
  // 在组件中定义每页显示的项目数量
  pageSize: number = 4;
  // 定义当前页数
  currentPage: number = 1;
  // 根据当前页数和每页显示数量计算起始索引和结束索引
  startIndex = (this.currentPage - 1) * this.pageSize;
  endIndex = Math.min(this.startIndex + this.pageSize - 1, this.mateData.data.length - 1);
  

  constructor(
    private http:HttpClient,
    private router:Router,
  ){
    this.getAllList();
  }
  getAllList(){
    this.http.get('http://localhost:4201/mate/getAllList').subscribe(res =>{
      this.mateData = res;
      this.pagedData = this.mateData.data.slice(0, 4);
      this.minprice = ""
      this.maxprice = ""
    })
  }
  // sortListByPage(){
  //   this.http.get(`http://localhost:4201/mate/sortListByPage/${this.currentPage}/:${this.pageSize}`).subscribe(res =>{
  //     this.pagedData= res;
  //     this.minprice = ""
  //     this.maxprice = ""
  //   })
  // }
  sortByComment(){
    this.http.get('http://localhost:4201/mate/sortByComment').subscribe(res =>{
      this.mateData = res;
      this.pagedData = this.mateData.data.slice(0, 4);
      this.minprice = ""
      this.maxprice = ""
    })
  }

  sortByPrice(){
    this.http.get(`http://localhost:4201/mate/sortByPrice/${this.minprice}/${this.maxprice}`).subscribe(res =>{
      this.mateData = res;
      this.pagedData = this.mateData.data.slice(0, 4);
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
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.mateData.data.length - 1);
    this.pagedData = this.mateData.data.slice(this.startIndex, this.endIndex + 1);
  }
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.mateData.data.length / this.pageSize);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }



  
}
