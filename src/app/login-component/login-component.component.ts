import { Component, OnInit } from '@angular/core';
import {Login} from "../commonData/ResponseData";
import { BehaviorSubject, Observable , Subscription} from 'rxjs';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import {TokenStorageService} from "../service/token-storage.service";
import {AuthService} from "../service/authservice.service";


import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
public username:any;
public password:any;

  public login :any={
    username:null,
    password:null
  }
   constructor(private authService: AuthService, private tokenStorage: TokenStorageService ,private router: Router,)  { }

  ngOnInit(): void {
   if (this.tokenStorage.getToken()) {
    
      this.roles = this.tokenStorage.getUser().roles;

    this.router.navigate(["adminpanel"]);
    } 
    if(this.tokenStorage.getLoginStatus() !=null && this.tokenStorage.getLoginStatus()=="true"){
      this.isLoggedIn = true;
    }

  }

 public   loginMethod(logindata:any):void{

  

  }


  onSubmit(): void {
    const { username, password } = this.form;

  
    let subscription = this.authService.login(username, password).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.tokenStorage.storeLoginStatus("true");
        this.authService.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['adminpanel']);

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.tokenStorage.storeLoginStatus("false");
        this.authService.isLoggedIn = false;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
