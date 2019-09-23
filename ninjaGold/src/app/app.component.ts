import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjaGold';
  goldValue = 0;

  addPotion(){
    const rand = Math.floor(Math.random() *5)+3;
    this.goldValue += Math.floor(rand);
  }
  addFelix(){
    const rand = Math.floor(Math.random() *6)+5;
    this.goldValue += Math.floor(rand);
  }
  addDragon(){
    const rand = Math.floor(Math.random() *6)+15;
    this.goldValue += Math.floor(rand);
  }
  addHorcrux(){
    if(this.RNG() == 1){
      this.goldValue += Math.floor(Math.random() *51);
    } else{
      this.goldValue += Math.floor(Math.random() *51)*-1;
    }

  }
  RNG(){
    return Math.floor(Math.random() *2)
  }

}
