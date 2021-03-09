import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nombre = 'pedro nieto';
  perfil;

  constructor( private router: Router ){
    console.log('constructor');

  }

  navegarPagina(pagina: number){
    console.log('PAGINA', pagina);
    const url = `/page${pagina}`
    console.log('URL', url)
    this.router.navigateByUrl(url)

  }

}
