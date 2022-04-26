import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddonApiService } from '../../Service/addon/addon-api.service';

@Component({
  selector: 'app-view-addon',
  templateUrl: './view-addon.component.html',
  styleUrls: ['./view-addon.component.css']
})
export class ViewAddonComponent implements OnInit {

  addondata!:any;
  constructor(private http:HttpClient,private apiService:AddonApiService ) { }

  ngOnInit(): void {
    this.GetAllAddonPlan();
  }
  GetAllAddonPlan()
  {
    this.http.get<any>("http://localhost:8080/addon")
    .subscribe(res=>{
      this.addondata=res;
    }) 
  }
  
  DeletePlan(id:number){
  this.apiService.DeleteAddonPlan(id).subscribe(data=>{
  alert("Plan Deleted");
  this.GetAllAddonPlan();

  });
}
editPlan(id:number){

  
}
onEdit(){
  this.apiService.UpdateAddonPlan
}

}
