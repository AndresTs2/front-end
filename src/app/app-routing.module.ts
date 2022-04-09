import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = 
[
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
  path: 'personajes',
  loadChildren:() =>
  import('./modulos/personajes/personajes.module').then(m =>
    m.PersonajesModule)
  },
  {
  path: 'estudiantes',
  loadChildren:() =>
  import('./modulos/estudiantes/estudiantes.module').then(m =>
    m.EstudiantesModule)
  },
  {
  path: 'profesores',
  loadChildren:() =>
  import('./modulos/profesores/profesores.module').then(m =>
    m.ProfesoresModule)
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path:'**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
