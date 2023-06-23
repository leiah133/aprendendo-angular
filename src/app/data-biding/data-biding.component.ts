import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {
 public nome: string = 'DataBiding';
 public idade: number =  25;
 public checkedDisable: boolean = false;
 public imgSrc: string = 'https://img.freepik.com/vetores-gratis/desenvolvimento-web-engenharia-de-programador-e-site-de-codificacao-em-telas-de-interface-de-realidade-aumentada-desenvolvedor-de-projeto-engenheiro-de-programacao-de-software-ou-design-de-aplicativo-cartoon-illustration_107791-3863.jpg?w=200&t=st=1687476904~exp=1687477504~hmac=3c9b048feb93ffb9cce191937fbdf4e1b6c041ab2fe37dcaad4b0f77d790d16c'
 public position: {
  x: number,
  y: number
 } = { x: 200, y : 200 };
 ngOnInit(): void {
 }
 public alertInfo(valor: MouseEvent){
  alert('valor');
 }
 public mouseMoveTest(valor: MouseEvent){
  this.position = { x: valor.clientX, y: valor.clientY };
 }
}
