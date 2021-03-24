import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classOption:boolean = false;
  styleOption:boolean = true;
  myStyle = "15px";

  isngClassActive:boolean = false;

  multiClass = {
    class1:true,
    class2: false,
    class3: true
  }
  
  multiStyle = {
    margin: '100px',
    padding: '10px',
    background: 'green',
    'border': '2px solid #333'
  }
}
