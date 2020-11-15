import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'luiz-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  
  constructor() { }

  ngOnInit(): void {
  }

}
