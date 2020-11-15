import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

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
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    HomeComponent,
    GastosComponent,
    ProventosComponent,
    BalancoComponent,
    MatFormFieldModule, 
    MatInputModule, 
  ]
})
export class PagesModule { }
