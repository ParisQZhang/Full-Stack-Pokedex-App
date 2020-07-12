import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon.model';
@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() {}

  ngOnInit(): void {}
}
