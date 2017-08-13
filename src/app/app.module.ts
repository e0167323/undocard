import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnodeckComponent } from './components/unodeck.component';
import { PlayerComponent } from './components/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    UnodeckComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
