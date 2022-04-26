import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonApiService } from '../../Service/addon/addon-api.service';

@Component({
  selector: 'app-edit-addon',
  templateUrl: './edit-addon.component.html',
  styleUrls: ['./edit-addon.component.css']
})
export class EditAddonComponent implements OnInit {
  result:any={}
  editAddonForm=new FormGroup({
    addonType:new FormControl(''),
    addonName:new FormControl(''),
    addonPrice:new FormControl(''),
    addonDescription:new FormControl(''),
    addonValidity:new FormControl(''),
  }) 

  constructor(private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:AddonApiService){}

  ngOnInit(): void {
    
    console.warn(this.router.snapshot.params['id']);
    this.apiService.getCurrentData(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      
      console.log("result",res);
      this.editAddonForm=new FormGroup({
        
        addonType:new FormControl(res['addonType']),
        addonName:new FormControl(res['addonName']),
        addonPrice:new FormControl(res['addonPrice']),
        addonDescription:new FormControl(res['addonDescription']),
        addonValidity:new FormControl(res['addonValidity']),
      })
    

})  
} 
  cancel(){}

  UpdateAddonPlan(){
    this.apiService.UpdateAddonPlan(this.router.snapshot.params['id'],this.editAddonForm.value).subscribe((res)=>{
      alert("Update Successful");
      this.editAddonForm.reset();
      this.rout.navigate(['viewAddon'])

    })
  }
  
}
