import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string = "";
  onAddToCart(event) {
    this.msg = event.target.value +  " added to cart"; 
  }

  onClickInput(event) {
    console.log(event.target.value);
    
  }

}
