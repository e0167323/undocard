import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  @Input() counter: number;

  ngOnInit() {
    this.counter=2;
  }

  public increment(): void
  {
    if(this.counter==7)
      {
        return;
      }
    this.counter++;
    console.log("Count is %d", this.counter);
  }

  public decrement():void{

    if(this.counter<=2)
      {
        return;
      }
    this.counter--;
    console.log("Count is %d", this.counter);
  }

}
