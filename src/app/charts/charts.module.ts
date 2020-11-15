import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    PieChartComponent,
    LineChartComponent,
    VerticalBarChartComponent,
  ],
  imports: [
    BrowserModule, 
    NgxChartsModule,
    BrowserAnimationsModule ,
  ],
  exports:[
    PieChartComponent,
    LineChartComponent,
    VerticalBarChartComponent,
  ]
})
export class ChartsModule { }
