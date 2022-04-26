import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrepaidApiService } from 'src/app/Admin/Service/prepaid/prepaid-api.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  result:any={}
  rechargeForm=new FormGroup({
    prepaidType:new FormControl(''),
    prepaidName:new FormControl(''),
    prepaidPrice:new FormControl(''),
    mobileNumber:new FormControl(''),
    name:new FormControl(''),
    emailId:new FormControl(''),
  }) 

  constructor(private formBuilder:FormBuilder ,private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:PrepaidApiService){
    this.rechargeForm= formBuilder.group({
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
      this.rechargeForm=new FormGroup({
        
        prepaidType:new FormControl(res['prepaidType']),
        prepaidName:new FormControl(res['prepaidName']),
        prepaidPrice:new FormControl(res['prepaidPrice']),
        
      })
    

})  
} 
submit(){}
cancel(){
  this.rout.navigate(['popularplans'])

  
}
}
