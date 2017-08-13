import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Card, UNODeck } from './Model/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // deckNew: Card[]= [];
  @Input() playerCount: number;
  @Input() counter: number;

  ngOnInit() {
    this.counter = 2;
  }

  ngOnDestroy()
  { }

  public increment(): void {
    if (this.counter == 7) {
      return;
    }
    this.counter++;
    console.log("Count is %d", this.counter);
  }

  public decrement(): void {

    if (this.counter <= 2) {
      return;
    }
    this.counter--;
    console.log("Count is %d", this.counter);
  }
}
