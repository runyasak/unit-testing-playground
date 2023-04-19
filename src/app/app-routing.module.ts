import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';

const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
