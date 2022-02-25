import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/authservice.service';
import {TokenStorageService} from '../service/token-storage.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  public isLoggedIn : boolean = false;
  constructor(public authService:AuthService, private tokenStorage: TokenStorageService,private router:Router ) { }

  ngOnInit(): void {

    if(this.tokenStorage.getLoginStatus()  && this.tokenStorage.getLoginStatus()=="true"){
      this.authService.isLoggedIn = true;
    }else {
      this.authService.isLoggedIn = false;
      this.router.navigate(['home'])
    }
    
  }

 public  logout(){
   this.authService.isLoggedIn = false;
  window.sessionStorage.clear();
  this.authService.isLoggedIn = false;
  }

}
