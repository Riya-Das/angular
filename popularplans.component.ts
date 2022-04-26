import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostpaidApiService } from 'src/app/Admin/Service/postpaid/postpaid-api.service';
import { PrepaidApiService } from 'src/app/Admin/Service/prepaid/prepaid-api.service';

@Component({
  selector: 'app-popularplans',
  templateUrl: './popularplans.component.html',
  styleUrls: ['./popularplans.component.css']
})
export class PopularplansComponent implements OnInit {
  prepaiddata!:any;
  postpaiddata!:any;
  constructor(private http:HttpClient,private apiService:PrepaidApiService,api:PostpaidApiService ) { }

  ngOnInit(): void {
    this.GetAllPrepaidPlan();
    this.GetAllPostpaidPlan();
  }
  GetAllPrepaidPlan()
  {
    this.http.get<any>("http://localhost:8080/prepaid")
    .subscribe(res=>{
      this.prepaiddata=res;
    }) 
  }
  GetAllPostpaidPlan()
  {
    this.http.get<any>("http://localhost:8080/postpaid")
    .subscribe(res=>{
      this.postpaiddata=res;
    }) 
  }


}
