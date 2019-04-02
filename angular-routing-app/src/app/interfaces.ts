export interface IPokemonOverview {
  name: string;
  url: string;
}
export interface IPokemons {
  pokemons: IPokemon[];
}
export interface IResponsePokeList {
    results: IPokemonOverview[];
}

export interface IPokemon {
    name: string;
    abilities: Ability[]
}
export interface Ability{
    name: string;
    url: string;
}
