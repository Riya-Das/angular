import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  "signupForm": FormGroup;

  constructor(private formBuilder:FormBuilder , private http:HttpClient, private router:Router) {
     this.signupForm = formBuilder.group({
      adminuser:new FormControl(),
      emailaddress: new FormControl(),
      username:new FormControl(),
      Mobile: new FormControl(),
      Password: new FormControl(),
      ConfirmPassword: new FormControl(),
    })

    this.signupForm = formBuilder.group({
      adminuser:['',Validators.required],
      emailaddress: ['', [Validators.required,Validators.email]],
      username:['',Validators.required],
      Mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    })
   }
  ngOnInit(): void {  }

  
  resetForm(){
    this.signupForm.reset();
  }
  postData(){
    this.http.post<any>("http://localhost:3000/Posts",this.signupForm.value)
    .subscribe(res=>{
    },err=>{
      alert("Something went wrong");
    })
    if(this.signupForm.value.adminuser==="User"){
    this.http.post<any>("http://localhost:3000/Users",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful"+"\n\n"+"Type : "+ this.signupForm.value.adminuser+"\n"+"Email : "+ this.signupForm.value.emailaddress+"\n"+"User Name : "+ this.signupForm.value.username+"\n"+"Mobile Number : "+ this.signupForm.value.Mobile);
      this.resetForm();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
  else{
    this.http.post<any>("http://localhost:3000/Admin",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful"+"\n\n"+"Type : "+ this.signupForm.value.adminuser+"\n"+"Email : "+ this.signupForm.value.emailaddress+"\n"+"User Name : "+ this.signupForm.value.username+"\n"+"Mobile Number : "+ this.signupForm.value.Mobile);
      this.resetForm();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
    
  }

}
