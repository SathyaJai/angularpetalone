import { Component, OnInit } from '@angular/core';
import { MissingPets} from "../commonData/ResponseData";
import {AdminService} from "../service/adminService.service"

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {
  
  activeTab = 'home';
  constructor(){}
  ngOnInit(): void {
      
  }
  

  changeTab(activeTab:any){
    this.activeTab = activeTab;
  }

}




