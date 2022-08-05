import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '';
  inputValue = '';
  counter = 0;
  pattern = '^[0-9]+$';
  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas! Quae nam provident facilis explicabo, earum quis. Libero, distinctio! Dignissimos, vitae. Saepe consectetur tempora a modi cum id iusto autem reprehenderit beatae pariatur voluptate, suscipit sequi corporis eaque aspernatur natus ad ratione, ipsa sapiente ducimus debitis placeat hic iure! Id.';

  user$: Promise<{}>;
  constructor() {
    this.user$ = this.getPromise();
  }

  onChange(event) {
    this.counter = this.counter + 1;
  }
  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise complete!'), 3000);
    });
  }
}
