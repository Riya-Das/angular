import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrepaidApiService } from '../../Service/prepaid/prepaid-api.service';

@Component({
  selector: 'app-view-prepaid',
  templateUrl: './view-prepaid.component.html',
  styleUrls: ['./view-prepaid.component.css']
})
export class ViewPrepaidComponent implements OnInit {

  prepaiddata!:any;
  constructor(private http:HttpClient,private apiService:PrepaidApiService ) { }

  ngOnInit(): void {
    this.GetAllPrepaidPlan();
  }
  GetAllPrepaidPlan()
  {
    this.http.get<any>("http://localhost:8080/prepaid")
    .subscribe(res=>{
      this.prepaiddata=res;
    }) 
  }
  
  DeletePlan(id:number){
  this.apiService.DeletePrepaidPlan(id).subscribe(data=>{
  alert("Plan Deleted");
  this.GetAllPrepaidPlan();

  });
}
editPlan(id:number){

  
}
onEdit(){
  this.apiService.UpdatePrepaidPlan
}

}
