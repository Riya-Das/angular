import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostpaidApiService {

  url="http://localhost:8080/postpaid"
  constructor( private http:HttpClient) { }
  
  PostPostpaidPlan(data:any){
    return this.http.post<any>("http://localhost:8080/postpaid",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  GetPostpaidPlan(data:any){
    return this.http.get<any>("http://localhost:8080/postpaid")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  UpdatePostpaidPlan(id:number,data:any){
    return this.http.put("http://localhost:8080/postpaid/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  DeletePostpaidPlan(id: number){
   const del='http://localhost:8080/postpaid/'+id;
   return this.http.delete(del);

  }
  getCurrentData(id: any){
    return this.http.get<any>(`${this.url}/${id}`)

}}

