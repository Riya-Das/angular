import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrepaidApiService } from '../../Service/prepaid/prepaid-api.service';
@Component({
  selector: 'app-edit-prepaid',
  templateUrl: './edit-prepaid.component.html',
  styleUrls: ['./edit-prepaid.component.css']
})
export class EditPrepaidComponent implements OnInit {
  result:any={}
  editPrepaidForm=new FormGroup({
    prepaidType:new FormControl(''),
    prepaidName:new FormControl(''),
    prepaidPrice:new FormControl(''),
    prepaidDescription:new FormControl(''),
    prepaidOffer:new FormControl(''),
    prepaidValidity:new FormControl(''),
  }) 

  constructor(private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:PrepaidApiService){}

  ngOnInit(): void {
    
    console.warn(this.router.snapshot.params['id']);
    this.apiService.getCurrentData(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      
      console.log("result",res);
      this.editPrepaidForm=new FormGroup({
        
        prepaidType:new FormControl(res['prepaidType']),
        prepaidName:new FormControl(res['prepaidName']),
        prepaidPrice:new FormControl(res['prepaidPrice']),
        prepaidDescription:new FormControl(res['prepaidDescription']),
        prepaidOffer:new FormControl(res['prepaidOffer']),
        prepaidValidity:new FormControl(res['prepaidValidity']),
      })
    

})  
} 
  cancel(){
    this.rout.navigate(['viewPrepaid'])

  }

  UpdatePrepaidPlan(){
    this.apiService.UpdatePrepaidPlan(this.router.snapshot.params['id'],
    this.editPrepaidForm.value).subscribe((res)=>{
      alert("Update Successful");
      this.rout.navigate(['viewPrepaid'])

    })
  }
  
}
