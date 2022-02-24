



export class ResponseData {

    data: any;
// links: Link[];


}
export interface MissingPets{
    id:number;
    name: string;
    imagePath: string;
    missingSince: string;
    petType: number;
    petsOwner:string;
    petsOwnerContactNumber: string
    aname:string;
    ainfo:string;
    acontactnumber:string;
    email:string;
    petinfo:string;
    missingDate:Date;
    lstUserInfo:AUserInfo[];
   
}

export interface AUserInfo{
    petid:number;
    aname:string;
    ainfo:string;
    acontactnumber:string;
}

export interface Login {
    username: string;
    password: string;
  




   
}

