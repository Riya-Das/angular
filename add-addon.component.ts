import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AddonApiService } from '../../Service/addon/addon-api.service';
import { AddonModal } from '../addon.modal';

@Component({
  selector: 'app-add-addon',
  templateUrl: './add-addon.component.html',
  styleUrls: ['./add-addon.component.css']
})
export class AddAddonComponent implements OnInit {

  
  
  "addAddonForm": FormGroup;
  AddonObj:AddonModal=new AddonModal();
  api: any;


  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private apiService:AddonApiService) {
     
    this.addAddonForm = formBuilder.group({
      addonType:['',Validators.required],
      addonName: ['',Validators.required],
      addonPrice:['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      addonDescription:['',Validators.required],
      addonValidity: ['', Validators.required],
    })
   }
  ngOnInit(): void {
 
    }

    post(){}
    cancel(){
      this.addAddonForm.reset();
      this.router.navigate(['viewAddon']);
    }
 
    postAddonDetail(){
      this.AddonObj.addonType=this.addAddonForm.value.addonType;
      this.AddonObj.addonName=this.addAddonForm.value.addonName;
      this.AddonObj.addonPrice=this.addAddonForm.value.addonPrice;
      this.AddonObj.addonDescription=this.addAddonForm.value.addonDescription;
      this.AddonObj.addonValidity=this.addAddonForm.value.addonValidity;

      this.apiService.PostAddonPlan(this.AddonObj)
      .subscribe(res=>{
        alert("Plan Added Successfully");
        this.addAddonForm.reset();
        this.router.navigate(['viewAddon'])

      },err=>{
        alert("Something went wrong");
      })
    
  }

  

}

