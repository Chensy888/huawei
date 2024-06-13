import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Service } from '../Service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-affirm',
  templateUrl: './affirm.component.html',
  styleUrl: './affirm.component.css'
})
export class AffirmComponent implements OnInit,AfterViewInit{
  areaData:any
  selectProvince:any
  selectCity:any
  selectDistrict:any
  provinces:any[]=[]
  citys:any[] = []
  districts:any[] = []
  proviceId:any
  cityId:any
  districtId:any

  data:any;
  serviceItems$ = this.service.serviceItems$
  totalmoney:number=0;
  name:any
  phone:any
  phone2:any
  message:any

  constructor(
    private service : Service,
    private http:HttpClient,
    private router:Router,
  )
  {
    this.serviceItems$.pipe(map(item =>{
      return item
    })).subscribe(item =>{
      this.data=item
      this.data.map((item:any) =>{
        this.totalmoney += item[0].price*item[3]
      })
    })
  }

  @ViewChild("box1") box1!: ElementRef<HTMLParagraphElement>
  @ViewChild("area") area!: ElementRef<HTMLParagraphElement>
  @ViewChild("mes") mes!: ElementRef<HTMLParagraphElement>

  ngAfterViewInit(): void {
    console.log(this.box1?.nativeElement)
  }
  addArea(){
    this.box1.nativeElement.style.display = 'block';
  }
  cancel(){
    this.box1.nativeElement.style.display = 'none';
  }
  save(){
    this.area.nativeElement.style.display = 'none';
    this.box1.nativeElement.style.display = 'none';
    this.mes.nativeElement.style.display = 'block';
  }
  
  onInputChange(event: any) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    // 过滤掉非数字字符
    const filteredValue = inputValue.replace(/[^0-9]/g, '');
    // 更新输入框的值
    inputElement.value = filteredValue;
    this.phone = filteredValue;
  }
  // 在组件类中
isInvalidPhoneNumber(): boolean {
  const phoneNumberPattern = /^1[0-9]{10}$/;
  return this.phone && !phoneNumberPattern.test(this.phone);
}
onInputChange2(event: any) {
  const inputElement = event.target;
  const inputValue = inputElement.value;
  // 过滤掉非数字字符
  const filteredValue = inputValue.replace(/[^0-9]/g, '');
  // 更新输入框的值
  inputElement.value = filteredValue;
  this.phone2 = filteredValue;
}
isInvalidPhoneNumber2(): boolean {
  const phoneNumberPattern = /^1[0-9]{10}$/;
  return this.phone2 && !phoneNumberPattern.test(this.phone);
}
  sumbit(){
    alert('购买成功！');

    setTimeout(() => {
      this.router.navigate(['/indent']);
    }, 3000); 
  }

  getProviceId(proviceId:number){
    this.proviceId=proviceId
    this.selectProvince = this.areaData[proviceId-1].area_name

    this.citys = []
    this.districts = []
    this.areaData.map((item:any) =>{
      if(item.parent_id == this.proviceId){
        this.citys.push(item)
      }
    })
  }

  getCityId(cityId:number){
    this.cityId=cityId
    this.selectCity = this.areaData[cityId-1].area_name

    this.districts = []
    this.areaData.map((item:any) =>{
      if(item.parent_id == this.cityId){
        this.districts.push(item)
      }
    })
  }
  getDistrictId(districtId:number){
    this.selectDistrict = this.areaData[districtId-1].area_name
  }
  
  
  ngOnInit(): void {
    this.http.get("http://127.0.0.1:3000/area/list").subscribe(res =>{
    this.areaData = res
    this.areaData.map((item:any) =>{
      if(item.level == 1){
        this.provinces.push(item)
      }
      })
    })
  }

}
