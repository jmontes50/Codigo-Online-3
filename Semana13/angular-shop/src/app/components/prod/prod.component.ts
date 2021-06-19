import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styles: [
  ]
})
export class ProdComponent implements OnInit {

  //Gracias a la interface Input, puedo recibir datos de otro componente
  //Siempre y cuando este sea padre
  @Input() prod:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.prod)
  }

}
