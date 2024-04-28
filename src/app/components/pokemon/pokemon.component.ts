import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons: Pokemon[] = [];

  // Este é um método do ciclo de vida do Angular que é chamado automaticamente depois que o componente
  // é inicializado. Usamos isso para chamar nossa função
  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    fetch('http://demo5828367.mockable.io/pokemon')
      //Dentro deste .then(), estamos pegando os dados JSON retornados e os passando para a próxima etapa do encadeamento da Promise.
      .then(response => response.json())
      //Dentro deste .then(), estamos atribuindo os dados à propriedade pokemons do componente
      .then((data: any) => {
        // Assumindo que os dados da API estão no formato de array de objetos Pokemon
        this.pokemons = data;
      })
      .catch(error => console.error('Erro ao buscar pokemons:', error));
  }

}

