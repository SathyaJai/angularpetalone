import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aboutpetdetails',
  templateUrl: './aboutpetdetails.component.html',
  styleUrls: ['./aboutpetdetails.component.css']
})
export class AboutpetdetailsComponent implements OnInit {

   imgFile: string;
    public uploadForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
      base64Value: new FormControl('', [Validators.required]),
      petType:new FormControl('',[Validators.required]),
      petsOwner:new FormControl('', [Validators.required]),
      petsOwnerContactNumber:new FormControl('', [Validators.required]),
      petinfo:new FormControl('', [Validators.nullValidator]),
      email:new FormControl('', [Validators.email]),
      missingDate:new FormControl('', [Validators.required])
  });
  
  constructor(private httpClient: HttpClient) { }
    
  get uf(){
    return this.uploadForm.controls;
  }
   
  ngOnInit(): void {
      
  }
  onImageChange(e:any) {
    const reader = new FileReader();
    
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.imgFile = reader.result as string;
        
        this.uploadForm.patchValue({
          base64Value: reader.result
        });
   
      };
    }
  }
   
public   upload(){
    console.log(this.uploadForm.value);
    this.httpClient.post('uploadmissingdog', this.uploadForm.value)
      .subscribe(response => {
        alert('Image has been uploaded.');
      })
  }
}