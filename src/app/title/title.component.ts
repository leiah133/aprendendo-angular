import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'meu primeiro componente - title';


  constructor(){}
  ngOnInit(): void {}
  ngOnChanges(): void {
    
  }
 ngOnDestroy(): void {
   alert('Destruido!');
 }
}
