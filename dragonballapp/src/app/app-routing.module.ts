import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'personajes', component:PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
