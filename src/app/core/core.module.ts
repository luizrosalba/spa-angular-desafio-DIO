import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { Error404Component } from './component/error404/error404.component';
// import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    // NavBarComponent,
    // Error404Component
  HeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
   HeaderComponent
],

})
export class CoreModule { 

}
