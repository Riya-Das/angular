import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostpaidApiService } from 'src/app/Admin/Service/postpaid/postpaid-api.service';

@Component({
  selector: 'app-recharge-postpaid',
  templateUrl: './recharge-postpaid.component.html',
  styleUrls: ['./recharge-postpaid.component.css']
})
export class RechargePostpaidComponent implements OnInit {
  result:any={}
  rechargeForm=new FormGroup({
    postpaidType:new FormControl(''),
    postpaidName:new FormControl(''),
    postpaidPrice:new FormControl(''),
    mobileNumber:new FormControl(''),
    name:new FormControl(''),
    emailId:new FormControl(''),
  }) 

  constructor(private formBuilder:FormBuilder , private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:PostpaidApiService){
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
        
        postpaidType:new FormControl(res['postpaidType']),
        postpaidName:new FormControl(res['postpaidName']),
        postpaidPrice:new FormControl(res['postpaidPrice']),
        
      })
    

})  
} 
submit(){}
cancel(){
  this.rout.navigate(['popularplans'])

}
}
