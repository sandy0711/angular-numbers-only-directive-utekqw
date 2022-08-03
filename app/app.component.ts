import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  value='';
  inputValue = '';
  counter = 0;
  pattern = '[^0-9]*';

  onChange(event) {
    this.counter = this.counter + 1; 
  }
}
