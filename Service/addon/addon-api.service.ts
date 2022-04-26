import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddonApiService {

  url="http://localhost:8080/addon"
  constructor( private http:HttpClient) { }
  
  PostAddonPlan(data:any){
    return this.http.post<any>("http://localhost:8080/addon",data)
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  GetAddonPlan(data:any){
    return this.http.get<any>("http://localhost:8080/addon")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  UpdateAddonPlan(id:number,data:any){
    return this.http.put("http://localhost:8080/addon/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  DeleteAddonPlan(id: number){
   const del='http://localhost:8080/addon/'+id;
   return this.http.delete(del);

  }
  getCurrentData(id: any){
    return this.http.get<any>(`${this.url}/${id}`)

}}

