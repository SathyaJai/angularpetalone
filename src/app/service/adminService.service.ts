import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ResponseData} from "../commonData/ResponseData";
import { MissingPets, AUserInfo} from "../commonData/ResponseData";
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';
@Injectable()
export class AdminService {
 

  constructor(public http: HttpClient, private token: TokenStorageService) { 
    
  }
public addRole(){
  let url ="http://localhost:8080/role/addRole"
  return this.http.get<ResponseData>(url);
}

public saveMissingPet(aUserInfo: AUserInfo): Observable<any>{
  console.log(" service"+ aUserInfo.aname);
 let url="localhost:8080/uploadmissingdog";

 const headers = { 'content-type': 'application/json'}  
 
 
  return this.http.post(url, JSON.stringify(aUserInfo),{'headers':headers});
}
  

public attachFileUploadPetSummary(file: File, dogDetails:MissingPets):Observable<ResponseData> {
  
      let url = '';
      
        const formData = new FormData();

        formData.append('file', file);
      
    
        formData.append('name', dogDetails.name.toString());
        formData.append('petType', dogDetails.petType.toString());
        formData.append('petsOwner', dogDetails.petsOwner.toString());
        formData.append('petsOwnerContactNumber', dogDetails.petsOwnerContactNumber.toString());
      //  formData.append('missingDate',  dogDetails.missingDate.toLocaleDateString());
        formData.append('email', dogDetails.email.toString());
        formData.append('aboutPet',dogDetails.petinfo.toString());
       
        url = 'uploadmissingdog';
        const token = this.token.getToken();
        const httpOptions = {
          headers: new HttpHeaders({
             'Content-Type': 'multipart/form-data; boundary=----pets----',
            // 'Authorization': 'Bearer ' +token,
            // 'reportProgress':'true',
            // 'responseType': 'json'
            
           
          })
          
        };
      
        return this.http.post<ResponseData>(url, formData, httpOptions);
    
    
  }
  public attachFileUploadPetSummary1(formData : FormData):Observable<ResponseData> {
   console.log(" service "+ formData.get("file"));

    let     url = 'uploadmissingdog';
      const token = this.token.getToken();
      const httpOptions = {
        headers: new HttpHeaders({
          
            'Content-Type': 'multipart/form-data',
            //'Authorization': 'Bearer ' +token,
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Request-Private-Network': 'true',
            'Access-Control-Allow-Origin': "*"
          
         
        })

        
        
      };
    
      return this.http.post<ResponseData>(url, formData, httpOptions);
  
  
}

}
