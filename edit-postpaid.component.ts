import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostpaidApiService } from '../../Service/postpaid/postpaid-api.service';
@Component({
  selector: 'app-edit-postpaid',
  templateUrl: './edit-postpaid.component.html',
  styleUrls: ['./edit-postpaid.component.css']
})
export class EditPostpaidComponent implements OnInit {

  result:any={}
  editPostpaidForm=new FormGroup({
    postpaidType:new FormControl(''),
    postpaidName:new FormControl(''),
    postpaidPrice:new FormControl(''),
    postpaidDescription:new FormControl(''),
    postpaidOffer:new FormControl(''),
    postpaidValidity:new FormControl(''),
  }) 

  constructor(private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:PostpaidApiService){}

  ngOnInit(): void {
    
    console.warn(this.router.snapshot.params['id']);
    this.apiService.getCurrentData(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      
      console.log("result",res);
      this.editPostpaidForm=new FormGroup({
        
        postpaidType:new FormControl(res['postpaidType']),
        postpaidName:new FormControl(res['postpaidName']),
        postpaidPrice:new FormControl(res['postpaidPrice']),
        postpaidDescription:new FormControl(res['postpaidDescription']),
        postpaidOffer:new FormControl(res['postpaidOffer']),
        postpaidValidity:new FormControl(res['postpaidValidity']),
      })
    

})  
} 
  cancel(){}

  UpdatePostpaidPlan(){
    this.apiService.UpdatePostpaidPlan(this.router.snapshot.params['id'],this.editPostpaidForm.value).subscribe((res)=>{
      alert("Update Successful");
      this.editPostpaidForm.reset();
      this.rout.navigate(['viewPostpaid'])

    })
  }
  
}
