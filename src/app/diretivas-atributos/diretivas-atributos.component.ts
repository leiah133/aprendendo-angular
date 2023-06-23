import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  ngOnInit(): void {
    setInterval(() =>{
      this.valor =!this.valor;
    },1000);
  };

}
