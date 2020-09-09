import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  public headerText = "Acesse o repositório";
  public url = "https://github.com/itzmatheus/papw";

  constructor() { }

  ngOnInit(): void {
  }

}
