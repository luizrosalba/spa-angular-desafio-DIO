import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
    LineChartComponent,
    VerticalBarChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PieChartComponent,
    LineChartComponent,
    VerticalBarChartComponent,
  ]
})
export class ChartsModule { }
