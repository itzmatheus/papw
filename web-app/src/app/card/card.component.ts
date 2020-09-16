import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public exibe = false;
  public descricao = 'Aprendendo Front End com Dr. Fujioka';
  public usuario = 'Matheus Leite'
  public imagem = '../../assets/images/profile.png'
  public profissao = 'Aluno'

  public buttons = {
    'show': 'Exibir',
    'hide': 'Ocultar',
  }

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil() {
    this.exibe = !this.exibe;
  }

}
