import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostpaidApiService } from '../../Service/postpaid/postpaid-api.service';

@Component({
  selector: 'app-view-postpaid',
  templateUrl: './view-postpaid.component.html',
  styleUrls: ['./view-postpaid.component.css']
})
export class ViewPostpaidComponent implements OnInit {

  postpaiddata!:any;
  constructor(private http:HttpClient,private apiService:PostpaidApiService ) { }

  ngOnInit(): void {
    this.GetAllPostpaidPlan();
  }
  GetAllPostpaidPlan()
  {
    this.http.get<any>("http://localhost:8080/postpaid")
    .subscribe(res=>{
      this.postpaiddata=res;
    }) 
  }
  
  DeletePlan(id:number){
  this.apiService.DeletePostpaidPlan(id).subscribe(data=>{
  alert("Plan Deleted");
  this.GetAllPostpaidPlan();

  });
}
editPlan(id:number){

  
}
onEdit(){
  this.apiService.UpdatePostpaidPlan
}

}
