import { Component, OnInit, Input } from '@angular/core';
import { Card, UNODeck, Player } from '../Model/Card';

@Component({
  selector: 'app-unodeck',
  templateUrl: './unodeck.component.html',
  styleUrls: ['./unodeck.component.css']
})
export class UnodeckComponent implements OnInit {

  constructor() { }

  @Input() players: number;
  deck: UNODeck;
  game: Player[] = [];
  p: Player;

  ngOnInit() {

  }
  public showHand() {
    this.deck = new UNODeck();
    this.deck.shuffle(5);

    for (let i = 0; i < this.players; i++) {
      this.p = new Player();
      this.p.PlayerNum = i + 1;
      this.game[i] = this.p;
      for (let j = 0; j < 7; j++) {
        this.game[i].hand[j] = this.deck.take();
      }
    }
  }

  public restart()
  {
    this.game = [];
  }

}
