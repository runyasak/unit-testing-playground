import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

export interface PokeApiData {
  sprites: { front_default: string };
  name: string;
  results: { url: string }[];
}

export interface PokemonData {
  name: string;
  img: string;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons$(): Observable<PokemonData[]> {
    return this.http
      .get<PokeApiData>('https://pokeapi.co/api/v2/pokemon?limit=100')
      .pipe(
        map((data) => data.results.map(({ url }) => url)),
        switchMap((urls) =>
          forkJoin(urls.map((url) => this.http.get<PokeApiData>(url)))
        ),
        map((results) =>
          results.map((data) => ({
            img: data.sprites.front_default,
            name: data.name,
          }))
        )
      );
  }
}
