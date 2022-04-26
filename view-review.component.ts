import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReviewApiService } from '../../Service/review-api.service';
import { ReviewModal } from '../review.modal';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {
  rev:any;
  reviews!: ReviewModal[];
  constructor(private http:HttpClient,private apiService:ReviewApiService ) { }

  ngOnInit(): void {
    this.GetAllReview();
  }
  GetAllReview(){
    this.http.get<any>("http://localhost:8080/review")
    .subscribe(res=>{
      this.rev=res;
    }) 
   }
   DeleteReview(id:number){
     this.apiService.DeleteReview(id).subscribe(data=>{
       alert("Review Deleted");
       this.GetAllReview();
     })
   }
}
