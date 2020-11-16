import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from 'src/app/model/transacoes';
import { TransacoesService } from 'src/app/pages/transacoes.service';

@Component({
  selector: 'luiz-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
 
  startDate = (new Date().getFullYear(),new Date().getMonth,new Date().getDay());

  transacoes: Transacoes[];
  transacoes$: Observable<Transacoes[]>;
  
  constructor(private transacoesService: TransacoesService) { }

  displayedColumns: string[] = ['nome', 'ID', 'valorTransacao',
  'diaTransacao', 'mesTransacao','anoTransacao','classificacaoTransacao'];
  dataSource : Transacoes[];
  
  single = [
    {
      "name": "Luiz",
      "value": 8940000
    },
    {
      "name": "USdadasA",
      "value": 5000000
    },
    {
      "name": "Franfdfdce",
      "value": 7200000
    }
  ];
  


  ngOnInit(): void{

    

    this.transacoesService.getTransacoes("Luiz"); /// faz a request 
    this.transacoesService.getTransacoes("Luiz")
       .subscribe(transacoes => 
         {
            this.transacoes = transacoes;
            this.dataSource=  this.transacoes;
       });

       
  }


  filtrar (){
    this.dataSource = this.dataSource.filter(item => 
      item.classificacaoTransacao !== 'transporte');

      this.ReescreverGrafico();
  }
  


  ReescreverGrafico (){
     var single = [];

    

  }


  


}




    
    // this.transacoesService.getTransacoesObservable("Luiz"); /// faz a request 
    // this.transacoesService.getTransacoesObservable("Luiz")
    //   .subscribe(transacoes => 
    //     {
    //     this.transacoes$ = transacoes;
    //     console.log(this.transacoes); /// so depois do subscribe que terei acesso as informaç~les 
        
    //   });
