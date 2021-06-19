import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado:boolean = false

  alumnos:Array<string> = [
    "Jhan",
    "Enrique",
    "Juan",
    "Veronica",
    "Adriana",
    "Violeta"
  ]

  url = "https://picsum.photos/300"

  texto = "Agua"

  constructor() { }

  ngOnInit(): void {
  }

  mostrarAlerta(){
    alert("El usuario ha hecho click!")
  }

  agregarAlumno(){
    this.alumnos.push(this.texto)
    this.texto = ""
  }

}
