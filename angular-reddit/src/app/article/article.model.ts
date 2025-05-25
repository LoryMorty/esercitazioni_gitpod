export class Article {
    // Il costruttore definisce le proprietà e le inizializza.
    // `public` crea automaticamente le proprietà della classe.
    constructor(
      public title: string,          // Titolo dell'articolo
      public link: string,           // URL dell'articolo
      public votes: number = 0       // Numero di voti (di default 0)
    ) {}
  
    // Metodo per aumentare i voti
    voteUp(): void {
      this.votes++;
    }
  
    // Metodo per diminuire i voti
    voteDown(): void {
      this.votes--;
    }
  
    // Metodo per ottenere il dominio da un link
    domain(): string | null {
      try {
        // Estrae il dominio da un URL tipo "https://angular.io/tutorial"
        const domainAndPath = this.link.split('//')[1];   // "angular.io/tutorial"
        return domainAndPath.split('/')[0];               // "angular.io"
      } catch (err) {
        return null;
      }
    }
  }
  