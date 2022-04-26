import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { PostpaidApiService } from '../../Service/postpaid/postpaid-api.service';
import { PostpaidModal } from '../postpaid.modal';

@Component({
  selector: 'app-add-postpaid',
  templateUrl: './add-postpaid.component.html',
  styleUrls: ['./add-postpaid.component.css']
})
export class AddPostpaidComponent implements OnInit {

  "addPostpaidForm": FormGroup;
  PostpaidObj:PostpaidModal=new PostpaidModal();
  api: any;


  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private apiService:PostpaidApiService) {
     
    this.addPostpaidForm = formBuilder.group({
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
      this.addPostpaidForm.reset();
      this.router.navigate(['viewPostpaid']);
    }
 
    postPostpaidDetail(){
      this.PostpaidObj.postpaidType=this.addPostpaidForm.value.RechargeType;
      this.PostpaidObj.postpaidName=this.addPostpaidForm.value.RechargeName;
      this.PostpaidObj.postpaidPrice=this.addPostpaidForm.value.RechargePrice;
      this.PostpaidObj.postpaidDescription=this.addPostpaidForm.value.Description;
      this.PostpaidObj.postpaidOffer=this.addPostpaidForm.value.Offer;
      this.PostpaidObj.postpaidValidity=this.addPostpaidForm.value.planValidity;

      this.apiService.PostPostpaidPlan(this.PostpaidObj)
      .subscribe(res=>{
        alert("Plan Added Successfully");
        this.addPostpaidForm.reset();
        this.router.navigate(['viewPostpaid'])

      },err=>{
        alert("Something went wrong");
      })
    
  }

  

}

