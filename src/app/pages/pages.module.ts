import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { GastosComponent } from './gastos/gastos.component';
import { ProventosComponent } from './proventos/proventos.component';
import { BalancoComponent } from './balanco/balanco.component';

import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [
    HomeComponent,
    GastosComponent,
    ProventosComponent,
    BalancoComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports:[
    HomeComponent,
    GastosComponent,
    ProventosComponent,
    BalancoComponent,
  ]
})
export class PagesModule { }
