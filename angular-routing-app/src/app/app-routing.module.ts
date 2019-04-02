import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/pokemons",
    pathMatch: "full"
  },
  { path: "pokemons", component: PokemonsComponent },
  { path: "pokemons/:id", component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
