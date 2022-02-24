import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/authservice.service';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {

    // if(this.tokenStorage.getLoginStatus() !=null && this.tokenStorage.getLoginStatus()=="true"){
    //   this.isLoggedIn = true;
    // }
  }

 public  logout(){
   this.authService.isLoggedIn = false;
  window.sessionStorage.clear();

  }

}
