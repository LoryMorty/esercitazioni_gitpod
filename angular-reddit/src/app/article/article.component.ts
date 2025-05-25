import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model'; // Importa la classe Article

@Component({
  selector: 'app-article',                     // Tag usato nel template per richiamare questo componente
  templateUrl: './article.component.html',     // Template HTML associato
  styleUrls: ['./article.component.css']       // Foglio di stile
})
export class ArticleComponent implements OnInit {
  // Associa la classe CSS "card" al div root del componente
  @HostBinding('class') cssClass = 'card';

  article: Article;  // Proprietà che rappresenta un singolo articolo

  constructor() {
    // Inizializza l’articolo con dati fittizi
    this.article = new Article('Angular 17', 'https://angular.io', 10);
  }

  // Aumenta i voti dell’articolo
  voteUp(): boolean {
    this.article.voteUp(); // Usa il metodo del model
    return false;          // Blocca il comportamento predefinito del click (es: ricarica)
  }

  // Diminuisce i voti dell’articolo
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {}  // Metodo chiamato alla creazione del componente (hook del ciclo di vita)
}
