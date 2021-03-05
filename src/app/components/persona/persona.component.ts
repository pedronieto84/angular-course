import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() alumno;
  @Output() mensaje = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log('CLICK', this.alumno.nombre);
    this.mensaje.emit(this.alumno.nombre)
  }



}
