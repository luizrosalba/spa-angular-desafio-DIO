import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { GastosComponent } from './gastos/gastos.component';
import { ProventosComponent } from './proventos/proventos.component';
import { TransacoesService } from './transacoes.service';

import { ChartsModule } from '../charts/charts.module';


@NgModule({
  declarations: [
    HomeComponent,
    GastosComponent,
    ProventosComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeComponent,
    GastosComponent,
    ProventosComponent,
    MatFormFieldModule, 
    MatInputModule, 
  ],
  providers: [
    TransacoesService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
