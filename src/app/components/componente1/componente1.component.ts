import { Component, OnInit } from '@angular/core';

export interface Persona {
  nombre: string
  apellido: string
  edad?:number
}

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})


export class Componente1Component implements OnInit {

  // null, undefined, 0, '', FALSE
  // 

  alumnos: Persona[] = [
    {
      nombre: 'Marc',
      apellido: 'Estalella',
      edad: 26
    },
    {
      nombre: 'Zdravko',
      apellido: 'Marinov',
      edad: 21
    },
    {
      nombre: 'Julia',
      apellido: 'Abad'
    }
  ]

  
  

  constructor() { 
    console.log('implemento el constructor');
  }


  ngOnInit(): void {
   // console.log('NOMBRES', this.nombres)
  }

}
