import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {
  name='abhishek'
  address='mumbai'
  email='abhishek@gmail.com'
  isValid=false
  sports=['cricket','football','basketball','volleyball']
  constructor() { }

  ngOnInit() {
  }
  changeAddress(updateAdress)
  {

    this.address=updateAdress
  }


}
