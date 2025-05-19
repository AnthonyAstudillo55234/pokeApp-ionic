import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pokemon-detail',
    loadComponent: () => import('./pokemon-detail/pokemon-detail.page').then( m => m.PokemonDetailPage)
  },
  {
  path: 'pokemon/:id',
  loadComponent: () =>
    import('./pokemon-detail/pokemon-detail.page').then(m => m.PokemonDetailPage),
}
];