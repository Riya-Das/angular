import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { PrepaidModal } from '../prepaid.modal';
import { PrepaidApiService } from '../../Service/prepaid/prepaid-api.service';

@Component({
  selector: 'app-add-prepaid',
  templateUrl: './add-prepaid.component.html',
  styleUrls: ['./add-prepaid.component.css']
})
export class AddPrepaidComponent implements OnInit {

  "addPrepaidForm": FormGroup;
  PrepaidObj:PrepaidModal=new PrepaidModal();
  api: any;


  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private apiService:PrepaidApiService) {
     
    this.addPrepaidForm = formBuilder.group({
      RechargeType:['',Validators.required],
      RechargeName: ['',Validators.required],
      RechargePrice:['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      Description:['',Validators.required],
      Offer: ['', Validators.required],
      planValidity: ['', Validators.required],
    })
   }
  ngOnInit(): void {
 
    }

    post(){}
    cancel(){
      this.addPrepaidForm.reset();
      this.router.navigate(['prepaid']);
    }
 
    postPrepaidDetail(){
      this.PrepaidObj.prepaidName=this.addPrepaidForm.value.RechargeName;
      this.PrepaidObj.prepaidPrice=this.addPrepaidForm.value.RechargePrice;
      this.PrepaidObj.prepaidType=this.addPrepaidForm.value.RechargeType;
      this.PrepaidObj.prepaidOffer=this.addPrepaidForm.value.Offer;
      this.PrepaidObj.prepaidValidity=this.addPrepaidForm.value.planValidity;
      this.PrepaidObj.prepaidDescription=this.addPrepaidForm.value.Description;

      this.apiService.PostPrepaidPlan(this.PrepaidObj)
      .subscribe(res=>{
        alert("Plan Added Successfully");
        this.addPrepaidForm.reset();
        this.router.navigate(['viewPrepaid'])

      },err=>{
        alert("Something went wrong");
      })
    
  }

  

}

