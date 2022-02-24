import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ResponseData} from "../commonData/ResponseData";
import { MissingPets, AUserInfo} from "../commonData/ResponseData";
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class PetsaloneService {

  constructor(public http: HttpClient) { 
    
  }
public fetchAllMissingDog(){
  let url ="petsimages/fetchall"
  return this.http.get<ResponseData>(url);
}

public saveAuserInf(aUserInfo: AUserInfo): Observable<any>{
  console.log(" service"+ aUserInfo.aname);
 let url="petsimages/petsinfobyauser";

 const headers = { 'content-type': 'application/json'}  
 
 
  return this.http.post(url, JSON.stringify(aUserInfo),{'headers':headers});
}
  
}
