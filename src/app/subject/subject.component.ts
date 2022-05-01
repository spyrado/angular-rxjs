import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  template: '<button> ola </button>'
})
export class SubjectComponent implements OnInit {

  data = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
    this.data.next(1);
    this.data.subscribe(a => console.log(a));
  }

  // Essa maneira não loga no console, pois um Subject, precisa primeirou se subscrever para dps receber o dado
  // e da maneira que está ai o dado está sendo enviado sem antes mesmo do subject se subscrever
  maneiraErradaQueNaoVaiLogarNoConsole() {
    this.data.next(1);
    this.data.subscribe(a => console.log(a));
  }

}
