import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-topics-practice';

  isValid:boolean = false;
  isBlockCreated:string = "Create Block"

  onCreateBlock() {
    if (this.isValid === false) {
      this.isValid = true;
      this.isBlockCreated = "Remove Block";
    }
    else {
      this.isValid = false;
      this.isBlockCreated = "Create Block";
    }
  }
}
