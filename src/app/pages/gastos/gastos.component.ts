import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from 'src/app/model/transacoes';
import { TransacoesService } from 'src/app/pages/transacoes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { isNgTemplate } from '@angular/compiler';
import { filter } from 'rxjs/operators';


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
  
  
  constructor(private transacoesService: TransacoesService) { }

  displayedColumns: string[] = ['nome', 'ID', 'valorTransacao',
  'diaTransacao', 'mesTransacao','anoTransacao','classificacaoTransacao','actions'];

  dataSource : Transacoes[];
  transacoes: Transacoes[];
  transacoesFiltrada: Transacoes[];
  transacoes$: Observable<Transacoes[]>;

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
  
  Remover(transacao:Transacoes){
    console.log(transacao);
    this.transacoesService.removeTransacoes(transacao); /// faz a request 
    this.transacoesService.removeTransacoes(transacao)
    .subscribe(transacoes => 
      {
         this.transacoes = transacoes;
         this.dataSource=  this.transacoes; /// preenche a tabela com todas as transações 
         console.log(this.dataSource);
         this.filtrar();
    });

  }

  dentroDoIntervalo(from,to,check){
    return ((check >= from && check <= to))
  }

  agruparPor(objetoArray, prop1 ,prop2) {
    return objetoArray.reduce(function (acc, obj) {
      let key = obj[prop1]; /// key = "10/2020"
      let value = obj[prop2]; /// value = -1000
      if (!acc[key]) { /// se nao existir , cria 
        acc[key] = [];  /// cria vazio 
        acc[key]=value;   /// pusha o objeto inteiro da primeira vez 
      }else
      acc[key]+=value;   /// na segunda eu quero que ele pegue o valor existente e some com o que está vindo 
      return acc;
    }, {});
  }

  
  filtrar (){

    /// pegando a data para filtrar 
    let dia =  this.rangeFormGroup.value.start.getDate();
    let mes = this.rangeFormGroup.value.start.getMonth()+1;
    let ano= this.rangeFormGroup.value.start.getYear()+1900;
    var dateFrom = `${dia}/${mes}/${ano}`;

     dia =  this.rangeFormGroup.value.end.getDate();
     mes = this.rangeFormGroup.value.end.getMonth()+1;
     ano= this.rangeFormGroup.value.end.getYear()+1900;
    var dateTo = `${dia}/${mes}/${ano}`;
    
    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");
    
    var from = new Date(parseInt(d1[2]), parseInt(d1[1])-1, parseInt(d1[0]));  // -1 because months are from 0 to 11
    var to   = new Date(parseInt(d2[2]), parseInt(d2[1])-1, parseInt(d2[0]));
  
   // filtrando a tabela 
    // this.dataSource = this.dataSource.filter(item => 
    //   item.classificacaoTransacao !== 'transporte');
    
    // this.dataSource = this.dataSource.filter(item => 
    //   item);    
    
    ///filtrando o gráfico
    this.transacoesFiltrada = this.dataSource.filter(item => 
      {
            dia =  item.diaTransacao;
            mes = item.mesTransacao;
            ano= item.anoTransacao;
            var dateCheck = `${dia}/${mes}/${ano}`;
            var c = dateCheck.split("/");
            var check = new Date(parseInt(c[2]), parseInt(c[1])-1, parseInt(c[0]));
            return (this.dentroDoIntervalo(from,to,check) )
      }
      );

     // let reduceMesAno = this.transacoesFiltrada.reduce();
     /// atualiza o grafico 
     //console.log(this.transacoesFiltrada);
     ///vetor mes ano 
     let agrupamento = 
        this.transacoesFiltrada.map(datum => ({ 
          name: datum.mesTransacao.toString()+'/'+datum.anoTransacao.toString(), 
          value: datum.valorTransacao }));
 
        let objTotalPorData =  this.agruparPor(agrupamento,'name','value');
        let vecTotalPorData = []; 
        let obj= { };
        
        for ( var mesAno in objTotalPorData) 
        {
          obj = {
            name : mesAno , 
            value:objTotalPorData[mesAno] ,
          }
          vecTotalPorData.push(obj);
        }

      // vetorTotalPorData.map(datum =>  
      //   console.log(datum));

       this.single = 
        vecTotalPorData.map(datum => ({ 
           name: datum.name, 
           value: datum.value }));

  }
  


}


// console.log(this.rangeFormGroup.value.start.getDate());
// console.log(this.rangeFormGroup.value.start.getMonth()+1);
// console.log(this.rangeFormGroup.value.start.getYear()+1900);



// console.log(this.rangeFormGroup.value.end.getDate());
// console.log(this.rangeFormGroup.value.end.getMonth()+1);
// console.log(this.rangeFormGroup.value.end.getYear()+1900);


 //   this.dataSource.forEach(item => {
    //   dia =  item.diaTransacao;
    //   mes = item.mesTransacao;
    //   ano= item.anoTransacao;
    //   var dateCheck = `${dia}/${mes}/${ano}`;
    //   var c = dateCheck.split("/");
    //   var check = new Date(parseInt(c[2]), parseInt(c[1])-1, parseInt(c[0]));
    //   if(this.dentroDoIntervalo(from,to,check) )
    //     this.transacoesFiltrada.push(tra);
    // });





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

