import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GastosComponent } from './pages/gastos/gastos.component';
/// TODO 
// import { BalancoComponent } from './pages/balanco/balanco.component';
// import { ProventosComponent } from './pages/proventos/proventos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
    {
    path: 'gastos',
    component: GastosComponent,
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
