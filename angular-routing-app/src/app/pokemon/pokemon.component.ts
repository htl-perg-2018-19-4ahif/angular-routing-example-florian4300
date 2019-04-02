import { Component, OnInit, Input } from "@angular/core";
import { IPokemon } from "../interfaces";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {
  pokemon: IPokemon;
  id: number;


  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchPokemon();
  }
  async fetchPokemon(){
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    const pokemonResponse = await this.http.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/'+this.id+"/").toPromise();
    this.pokemon = pokemonResponse;
  }

}
