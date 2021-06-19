import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styles: [
  ]
})
export class ProdComponent implements OnInit {

  @Input() prod:any
  constructor() { }

  ngOnInit(): void {
  }

}
