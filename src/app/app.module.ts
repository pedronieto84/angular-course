import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Componente1Component } from './components/componente1/componente1.component';
import { PersonaComponent } from './components/persona/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';



const config = {
  apiKey: "AIzaSyA5WsrCqkDVzq5RHUUl_G7fYQpe3EIsLcI",
  authDomain: "angular-curso-4abd7.firebaseapp.com",
  projectId: "angular-curso-4abd7",
  storageBucket: "angular-curso-4abd7.appspot.com",
  messagingSenderId: "905994794314",
  appId: "1:905994794314:web:abb41a0ab2514d142ffdb3",
  measurementId: "G-WFDXW3WLDS"
}

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    PersonaComponent,
    Page1Component,
    Page2Component,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
