import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PokemonService],
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.css'],
})
export class PokemonsPageComponent {
  pokemons$ = this.pokemonService.getPokemons$();

  constructor(private pokemonService: PokemonService) {}
}
