import { Component, OnInit, Input } from "@angular/core";
import {
  IPokemonOverview,
  IPokemons,
  IResponsePokeList,
  IPokemon
} from "../interfaces";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"]
})
export class PokemonsComponent implements OnInit {
  pokemons: IPokemonOverview[] = [];
  pokeOverview: IPokemonOverview[] = [];
  @Input() filter: string;

  constructor(private http: HttpClient) {
    this.fetchPokemons();
  }

  ngOnInit() {}

  async fetchPokemons() {
    const pokemonsReponse = await this.http
      .get<IResponsePokeList>(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200000000"
      )
      .toPromise();
    this.pokeOverview = pokemonsReponse.results;
    this.pokemons = this.pokeOverview;
  }
  applyFilter() {
    if (this.filter !== "") {
      this.pokemons = this.pokeOverview.filter(element => {
        return element.name.startsWith(this.filter);
      });
    } else {
      this.pokemons = this.pokeOverview;
    }
  }
}
