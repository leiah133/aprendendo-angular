import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 template:`
 <app-title></app-title>
 <app-data-biding></app-data-biding>
 <app-diretivas-estruturais></app-diretivas-estruturais>
 <app-diretivas-atributos></app-diretivas-atributos>
 <router-outlet></router-outlet>`, 
 
})


export class AppComponent implements OnInit{
 ngOnInit(): void {  
 }
 
  
}
