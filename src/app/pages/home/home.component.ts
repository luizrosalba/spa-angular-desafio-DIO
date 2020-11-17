import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TransacoesService } from 'src/app/pages/transacoes.service';


interface Classificacao {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'luiz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  
  valor=0.0; 
  acerto= {};

  constructor(private transacoesService: TransacoesService,
              private formBuilder: FormBuilder) 
  {
    
     
  }

  public AdicionarTransacao = new FormGroup({

    nome: new FormControl('', [ Validators.required,]),
    valorTransacao: new FormControl('', [ Validators.required,]),
    dataTransacao: new FormControl('', [ Validators.required,]),
    classificacaoTransacao: new FormControl('', [ Validators.required,]),
    ID: new FormControl('', [ Validators.required,]),
  });


 
  classificacoes: Classificacao[] = [
    {value: 'alimentacao', viewValue: 'Alimentação'},
    {value: 'educacao', viewValue: 'Educação'},
    {value: 'transporte', viewValue: 'Transporte'},
    {value: 'salario', viewValue: 'Salário'},
    {value: 'trabalhoextra', viewValue: 'Trabalhos Extras'},
  ];
  
  Varia(ent){
    this.valor+= parseFloat(ent);
    this.AdicionarTransacao.get('valorTransacao').setValue(this.valor.toFixed(2).toString());
  }

  onSubmit(valorSubmetido) {
   
    let dia =  valorSubmetido.dataTransacao.getDate();
    let mes = valorSubmetido.dataTransacao.getMonth()+1;
    let ano= valorSubmetido.dataTransacao.getYear()+1900;
    var dateFrom = `${dia}/${mes}/${ano}`;

    console.log(valorSubmetido.ID);
    console.log(valorSubmetido.classificacaoTransacao);
    console.log(valorSubmetido.nome);
    console.log(valorSubmetido.valorTransacao);
    


     this.acerto["ID"] = parseInt(valorSubmetido.ID);
     this.acerto["diaTransacao"]= dia; 
     this.acerto["mesTransacao"]= mes; 
     this.acerto["anoTransacao"]= ano; 
     this.acerto["classificacaoTransacao"]= valorSubmetido.classificacaoTransacao; 
     this.acerto["nome"] = valorSubmetido.nome; 
     this.acerto["valorTransacao"]= parseFloat(valorSubmetido.valorTransacao); 

    // Process checkout data here
    this.transacoesService.createTransacao(this.acerto);
    // this.checkoutForm.reset();
    alert("Transação de R$ " + this.acerto["valorTransacao"] + " criada");
    console.warn('Your order has been submitted', valorSubmetido);
  }

  
  public OnDateChange(event: any): void {
    
    let dia =  event.getDate();
    let mes = event.getMonth()+1;
    let ano= event.getYear()+1900;
    var dateFrom = `${dia}/${mes}/${ano}`;
    //console.log(dateFrom);

  }

  
}

