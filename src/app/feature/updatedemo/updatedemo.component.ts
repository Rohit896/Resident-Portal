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
  constructor() { }

  ngOnInit() {
  }

  submit()
  {
    console.log(this.upload);
  }
}
