import { Component, OnInit } from '@angular/core';
import { copyStyles } from '@angular/animations/browser/src/util';
import { DataStorageService } from 'src/app/core/services/data-storage.service';

@Component({
  selector: 'app-updatedemo',
  templateUrl: './updatedemo.component.html',
  styleUrls: ['./updatedemo.component.css']
})
export class UpdatedemoComponent implements OnInit {

  house='';
  street='';
  area='';
<<<<<<< HEAD
  Landmark='';
  Pincode='';
  Village='';
  PostOffice='';
  District='';
  State='';
  upload='';
  fileToUpload: File = null;
  fileByteArray;
  constructor() { }
=======
  landmark='';
  pincode='';
  village='';
  postOffice='';
  district='';
  state='';
  upload:File;
  fileToUpload:File=null;
  fileByteArray:any;
  constructor(private dataService:DataStorageService) { }
>>>>>>> a054a470cc409766b010f41bcdc4d638dc726c67

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.getBase64(files[0]).then(data => {
      this.fileByteArray = data;
    });
}
  submit()
  {
<<<<<<< HEAD
    console.log(this.upload);
    
=======
    console.log(this.fileByteArray);
    console.log(this.fileToUpload);
    // console.log(this.house);
    // console.log(this.street);
    // console.log(this.area);
    // console.log(this.landmark);
    // console.log(this.pincode);
    // console.log(this.village);
    // console.log(this.postOffice);
    // console.log(this.district);
    // console.log(this.state);

    this.dataService.updateDemographic(this.fileByteArray,this.fileToUpload);
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
>>>>>>> a054a470cc409766b010f41bcdc4d638dc726c67
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log( this.fileToUpload);
    this.getBase64(this.fileToUpload).then(data => {
      this.fileByteArray = data;
    });
    console.log("filebytearray"+ this.fileByteArray);

    
}

getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
}
