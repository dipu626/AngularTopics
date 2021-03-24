import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicName:string = "Dipu Kumar Mohanto";
  appStatus:boolean = false;
  status1:string = "Online";
  status2:string = "Offline";

  customFunction() {
    return "This is custom function " + this.dynamicName;
  }

}
