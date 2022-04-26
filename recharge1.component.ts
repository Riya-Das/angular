import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddonApiService } from 'src/app/Admin/Service/addon/addon-api.service';

@Component({
  selector: 'app-recharge1',
  templateUrl: './recharge1.component.html',
  styleUrls: ['./recharge1.component.css']
})
export class Recharge1Component implements OnInit {

  result:any={}
  addonrechargeForm=new FormGroup({
    addonType:new FormControl(''),
    addonName:new FormControl(''),
    addonPrice:new FormControl(''),
    mobileNumber:new FormControl(''),
    name:new FormControl(''),
    emailId:new FormControl(''),
  }) 

  constructor(private formBuilder:FormBuilder ,private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:AddonApiService){
    this.addonrechargeForm= formBuilder.group({
      mobileNumber:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],

    })
  }

  ngOnInit(): void {
    
    console.warn(this.router.snapshot.params['id']);
    this.apiService.getCurrentData(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      
      console.log("result",res);
      this.addonrechargeForm=new FormGroup({
        
        addonType:new FormControl(res['addonType']),
        addonName:new FormControl(res['addonName']),
        addonPrice:new FormControl(res['addonPrice']),
        
      })
    

})  
} 
submit(){}
cancel(){
  this.rout.navigate(['addon'])

}
}
