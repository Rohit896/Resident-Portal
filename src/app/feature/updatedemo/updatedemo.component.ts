import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatedemo',
  templateUrl: './updatedemo.component.html',
  styleUrls: ['./updatedemo.component.css']
})
export class UpdatedemoComponent implements OnInit {

  house='';
  street='';
  area='';
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

  ngOnInit() {
  }

  submit()
  {
    console.log(this.upload);
    
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
