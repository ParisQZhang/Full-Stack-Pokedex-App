import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon.model';
import { ApiClientService } from '../../services/api-client/api-client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  id: number;
  constructor(
    private apiClientService: ApiClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.id = this.route.snapshot.params.id;
    this.apiClientService.catchOne(this.id).subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon[0];
    });
  }
}
