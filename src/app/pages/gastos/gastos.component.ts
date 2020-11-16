import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from 'src/app/model/transacoes';
import { TransacoesService } from 'src/app/pages/transacoes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'luiz-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
 

  rangeFormGroup = new FormGroup({  
    start: new FormControl(null, Validators.required),  
    end: new FormControl(null, Validators.required)  
  })  
  

  transacoes: Transacoes[];
  transacoesFiltrada: Transacoes[];

  transacoes$: Observable<Transacoes[]>;
  
  constructor(private transacoesService: TransacoesService) { }

  displayedColumns: string[] = ['nome', 'ID', 'valorTransacao',
  'diaTransacao', 'mesTransacao','anoTransacao','classificacaoTransacao'];
  dataSource : Transacoes[];
  
  single = [];
  


  ngOnInit(): void{

    

    this.transacoesService.getTransacoes("Luiz"); /// faz a request 
    this.transacoesService.getTransacoes("Luiz")
       .subscribe(transacoes => 
         {
            this.transacoes = transacoes;
            this.dataSource=  this.transacoes; /// preenche a tabela com todas as transações 
       });

       
  }

  filtrar (){
    
    
    /// filtrando a tabela 
    this.dataSource = this.dataSource.filter(item => 
      item.classificacaoTransacao !== 'transporte');
    
    ///filtrando o gráfico
    this.transacoesFiltrada = this.dataSource.filter(item => 
      item.mesTransacao === 10);
      console.log(this.transacoesFiltrada);
      

      this.single = 
        this.transacoesFiltrada.map(datum => ({ 
          name: datum.mesTransacao, 
          value: datum.valorTransacao }));


     

      console.log(this.single);

  }
  


}


// single = [
//   {
//     "name": "Luiz",
//     "value": 8940000
//   },
//   {
//     "name": "USdadasA",
//     "value": 5000000
//   },
//   {
//     "name": "Franfdfdce",
//     "value": 7200000
//   }
// ];



    // console.log(this.rangeFormGroup.value.start.getDay());
    // console.log(this.rangeFormGroup.value.start.getMonth());
    // console.log(this.rangeFormGroup.value.start.getFullYear());

    // console.log(this.rangeFormGroup.value.end.getDay());
    // console.log(this.rangeFormGroup.value.end.getMonth());
    // console.log(this.rangeFormGroup.value.end.getFullYear());
   
    // console.log(this.rangeFormGroup.value);




    
    // this.transacoesService.getTransacoesObservable("Luiz"); /// faz a request 
    // this.transacoesService.getTransacoesObservable("Luiz")
    //   .subscribe(transacoes => 
    //     {
    //     this.transacoes$ = transacoes;
    //     console.log(this.transacoes); /// so depois do subscribe que terei acesso as informaç~les 
        
    //   });
