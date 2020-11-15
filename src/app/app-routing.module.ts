import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProventosComponent } from './proventos/proventos.component';
import { GastosComponent } from './gastos/gastos.component';
import { BalancoComponent } from './balanco/balanco.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'proventos',
    component: ProventosComponent,
  },
  {
    path: 'gastos',
    component: GastosComponent,
  },
  {
    path: 'balanco',
    component: BalancoComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
