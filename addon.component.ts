import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  addondata!:any;
  constructor(private http:HttpClient) { }

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

}
