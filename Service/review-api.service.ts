import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {
  private apiServerUrl="http://localhost:8080/review";

  constructor(private http:HttpClient) { }

  PostReview(data:any){
    return this.http.post<any>("http://localhost:8080/review",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  GetReview(data:any){
    return this.http.get<any>("http://localhost:8080/review")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  UpdateReview(id:number,data:any){
    return this.http.put("http://localhost:8080/review/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  DeleteReview(id: number){
   const del='http://localhost:8080/review/'+id;
   return this.http.delete(del);

  }
  getCurrentReview(id: any){
    return this.http.get<any>(`${this.apiServerUrl}/${id}`)

}
}
