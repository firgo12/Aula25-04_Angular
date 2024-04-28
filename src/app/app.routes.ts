import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'nova-rota', component:RotaComponent },
{ path: 'cliente/:id', component:ClientDetailComponent },
{ path: 'cliente', component: ClienteComponent},
{ path: 'pokemon', component: PokemonComponent },
{ path: '**', component: HomeComponent}


];
