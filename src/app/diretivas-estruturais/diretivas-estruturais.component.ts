import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    {nome: 'Léia Oliveira', idade: 41},
    {nome: 'Rayssa Oliveira', idade : 42},
    {nome: 'Hadassa Oliveira', idade: 43},
  ]
  public nome: string = 'léia';

  constructor(){}

  ngOnInit(): void {

    setInterval(() =>{
      if (this.condition){
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }
   
    public onClick(){
      if(this.conditionClick){
        this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }
     }
     public onClickAddList():void {
      this.list.push({nome: "nay", idade: 31 })
     }
     public onClickEventList(event: number): void{
      
      this.list.splice(event, 1)
      
     }

  }



