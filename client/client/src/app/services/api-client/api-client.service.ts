import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon/pokemon.model';
//gottaCatchEmAll(), catchOne(pokemonId)
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private url: string = 'http://localhost:3055/pokemons';

  constructor(private httpClient: HttpClient) {}

  gottaCatchEmAll(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.url);
  }

  catchOne(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}/${id}`);
  }
}
