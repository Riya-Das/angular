import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrepaidApiService {

  url="http://localhost:8080/prepaid"
  constructor( private http:HttpClient) { }
  
  PostPrepaidPlan(data:any){
    return this.http.post<any>("http://localhost:8080/prepaid",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  GetPrepaidPlan(data:any){
    return this.http.get<any>("http://localhost:8080/prepaid")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  UpdatePrepaidPlan(id:number,data:any){
    return this.http.put("http://localhost:8080/prepaid/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  DeletePrepaidPlan(id: number){
   const del='http://localhost:8080/prepaid/'+id;
   return this.http.delete(del);

  }
  getCurrentData(id: any){
    return this.http.get<any>(`${this.url}/${id}`)

}}

