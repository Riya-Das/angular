import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewApiService } from '../../Service/review-api.service';
import { ReviewModal } from '../review.modal';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  
  "addReviewForm":FormGroup;
  ReviewObj:ReviewModal=new ReviewModal();
  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router,private apiService:ReviewApiService) { 
   this.addReviewForm=formBuilder.group({
    reviewDescription:['',Validators.required]
   })
    
  }

  ngOnInit(): void { 
   }



   cancel(){
     this.addReviewForm.reset();
     this.router.navigate(['viewReview']);
   }
   post(){
    this.ReviewObj.reviewDescription=this.addReviewForm.value.reviewDescription;
    
    this.apiService.PostReview(this.ReviewObj)
    .subscribe(res=>{
        alert("Review Added Successfully");
        this.addReviewForm.reset();
        this.router.navigate(['viewReview']);

      },err=>{
        alert("Something went wrong");
      }
    );
   }
}
