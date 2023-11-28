import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`

<h3> Counter: {{ counter }} </h3>

<button (click)="modifyValueButton(5)">+1</button>
<button (click)="resetValueButton()">reset</button>
<button (click)="modifyValueButton(-1)">-1</button>

  `,
})
export class CounterComponent {
  public counter:number = 10;

  modifyValueButton( value:number ):void {
    this.counter += value;
  }
  resetValueButton( ):void {
    this.counter = 10;
  }
}

