import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon.model';
import { ApiClientService } from '../../services/api-client/api-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(
    private apiClient: ApiClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const nameSearch: string = params['pokeName'];
      this.apiClient.gottaCatchEmAll().subscribe((data: Array<Pokemon>) => {
        if (nameSearch) {
          this.pokemons = this.newSearch(data, nameSearch);
        } else {
          this.pokemons = data;
        }
      });
    });
  }

  newSearch(data, nameSearch) {
    const regex = new RegExp(nameSearch, 'gi');
    return data.filter((pokemon) => regex.test(pokemon.name));
  }
}
