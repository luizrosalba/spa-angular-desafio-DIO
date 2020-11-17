import { Component, Input } from '@angular/core';

//import { single } from '../data-vertical';

@Component({
  selector: 'luiz-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent  {

  @Input() single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mês/Ano';
  showYAxisLabel = true;
  yAxisLabel = 'Total Valor Gasto';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this,  this.single);
   
  }

  onSelect(event) {
    console.log(event);
  }
}
