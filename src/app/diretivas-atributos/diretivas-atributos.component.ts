import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '100px';
  public nome: string = '';
  public list: Array<{nome: string}> = [{nome: 'Léia Oliver'}];

  ngOnInit(): void {
    setInterval(() =>{
      this.valor =!this.valor;
      if(this.height == '100px'){
        this.height = '70px';
      } else {
        this.height = '50px';
      }
    },1000);
  };

  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = '';
  }
}
