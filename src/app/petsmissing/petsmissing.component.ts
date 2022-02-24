import { Component, OnInit, OnDestroy , NgModule} from '@angular/core';

import {PetsaloneService } from "../service/petsalone.service"
import { interval as observableInterval, Subscription ,  Observable , forkJoin as observableForkJoin} from 'rxjs';
import { MissingPets, AUserInfo} from "../commonData/ResponseData"
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-petsmissing',
  templateUrl: './petsmissing.component.html',
  styleUrls: ['./petsmissing.component.css']
})
export class PetsmissingComponent implements OnInit, OnDestroy {

 public  pets:MissingPets[] =[];
 toShow: boolean[] =[];
 
  constructor(public  petservice:PetsaloneService , private router:Router) { }

  ngOnInit(): void {
 console.log("oninit pet alone")
this.getMissingDog();
  }

  getMissingDog(){
    let subscription = this.petservice.fetchAllMissingDog().subscribe( response => {

     this.pets=  response.data;
      console.log(" data " + this.pets[0].imagePath);
      
    }  );
  }
ngOnDestroy():void{
  // if (this.subscription != null) {
  //   this.subscription.unsubscribe();
  // }
  
}

trackPetInfo(index:any, userInfo:AUserInfo){
  return userInfo ? userInfo.petid:undefined;
}
 trackPet( index:any, pet :MissingPets ) {
        console.log(pet);
        return pet ? pet.imagePath : undefined;

    }

 public   toShowUserInfo(index : number){
      

      if(this.toShow[index] ){
        this.toShow[index] = false;
      }else{
        this.toShow[index] = true;
      }
    }

  public userInfoAboutPet(index:any,pet :MissingPets ){
    console.log(pet.aname +" "+pet.ainfo+" " + pet.acontactnumber);
    this.toShow[index] = false;
     let auserInfo: AUserInfo ={
      petid:pet.id,
      aname:pet.aname,
      ainfo:pet.ainfo,
      acontactnumber:pet.acontactnumber
     } 

     this.petservice.saveAuserInf(auserInfo)  .subscribe(data => {
      console.log(data)
      if(data.data){
        alert(" Thank you for information");
        this.router.navigate(["adminpanel"]);
        
      }else{
        alert("infomation sending fail. Can you please try again");
      }
    
    })      
  }
   

}
