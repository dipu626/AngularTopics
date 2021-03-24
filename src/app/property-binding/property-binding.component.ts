import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = "text";
  isDisabled:boolean = false;
  isHidden:boolean = true;

  appStatus:boolean = true;
  status1:string = "Online";
  status2:string = "Offline";

}
