import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { GastosComponent } from './gastos/gastos.component';
import { ProventosComponent } from './proventos/proventos.component';
import { BalancoComponent } from './balanco/balanco.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GastosComponent,
    ProventosComponent,
    BalancoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
