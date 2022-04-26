import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) {
    this.loginForm = formBuilder.group({
      emailaddress: new FormControl(),
      Password: new FormControl(),
      City: new FormControl(),
    })

    this.loginForm = formBuilder.group({
      emailaddress: ['', [Validators.required,Validators.email]],
      Password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
   
  }

  resetForm(){
    this.loginForm.reset();
  }
  post=false;
  postData(){
    this.http.get<any>("http://localhost:3000/Posts")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.emailaddress===this.loginForm.value.emailaddress && a.Password===this.loginForm.value.Password
      });
      if(user){
      }else {
        alert("Invalid Username or Password");
      }
    },err=>{
      alert("Something went wrong");
    })
    this.http.get<any>("http://localhost:3000/Users")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.emailaddress===this.loginForm.value.emailaddress && a.Password===this.loginForm.value.Password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['popularplans'])
      }
    },err=>{
      alert("Something wwent wrong");
    }) 
       this.http.get<any>("http://localhost:3000/Admin")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.emailaddress===this.loginForm.value.emailaddress && a.Password===this.loginForm.value.Password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['viewPrepaid'])
      }
    },err=>{
      alert("Something wwent wrong");
    })
  }
}
