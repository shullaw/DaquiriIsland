import { Component, OnInit } from '@angular/core';
import { map, Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-daiquiri-cup',
  templateUrl: './daiquiri-cup.component.html',
  styleUrls: ['./daiquiri-cup.component.scss']
})
export class DaiquiriCupComponent implements OnInit {

  daiquiris: any = [
    'banana',
    'blue-dolphin',
    'bull-frog',
    'coke',
    'darker-orange-octane',
    'incredible-hulk',
    'kiwi-strawberry',
    'lighter-blue-dolphin',
    'mango',
    'orange-octane',
    'pina-colada',
    'pink-lemonade',
    'screw-driver',
    'strawberry-pina-colada',
    'strawberry',
    'sweet-tart',
    'ultimate-buzz',
    'White-Russian'
  ]

  inView: any = [];
  counter: number = 0;
  source!: Observable<number>;
  time!: Subscription;
  t!: number;


  timer(): void {
  /*
    timer takes a second argument, how often to emit subsequent values
    in this case we will emit first value after 1 second and subsequent
    values every 2 seconds after
  */
  this.source = timer(1000, 2000);
  //output: 0,1,2,3,4,5......
  this.source.subscribe(val => this.t = val);
  }

  mouseEnter() {
    // console.log("mouse enter : " + div);
    this.counter++;
    this.transition();
  }

  mouseLeave() {
    //  console.log('mouse leave :' + div);
    // this.counter++;
  }

  transition() {
    console.log(this.t);
    if (this.t % 2 == 0){
      this.counter++;
    }
    
  }


  constructor() {

  }


  ngOnInit(): void {
    this.timer();

  }

}
