import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewApiService } from '../../Service/review-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  result:any={}
  editReviewForm=new FormGroup({
    reviewDescription:new FormControl('')
  })
  constructor(private rout:Router,private router:ActivatedRoute,private http:HttpClient,private apiService:ReviewApiService) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id']);
    this.apiService.getCurrentReview(this.router.snapshot.params['id'])
    .subscribe((res:any)=>{
      
      console.log("result",res);
      this.editReviewForm=new FormGroup({
        reviewDescription:new FormControl(res['reviewDescription'])
      })
    })
}
cancel(){
  this.rout.navigate(['viewReview'])
}
updateReviewDetail(){
  this.apiService.UpdateReview(this.router.snapshot.params['id'],
  this.editReviewForm.value).subscribe((res)=>{
    alert("Update Successful");
      this.editReviewForm.reset();
      this.rout.navigate(['addReview']);
  })
}
}
