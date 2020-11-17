import { filter } from 'rxjs/operators';
import { Transacoes } from "../app/model/Transacoes";

export function getEntities() {
    return _entities;
  }
  
  export function setEntities(entities: Transacoes[]) {
    _entities = entities;
  }
  
  export function removeEntities(entitie: Transacoes) {
    const filteredEntities = _entities.filter( item => {
      if (
        (item.ID === entitie.ID) &&  
        (item.nome === entitie.nome) &&  
        (item.anoTransacao === entitie.anoTransacao) &&  
        (item.classificacaoTransacao === entitie.classificacaoTransacao) &&  
        (item.diaTransacao === entitie.diaTransacao) &&  
        (item.mesTransacao === entitie.mesTransacao) &&  
        (item.anoTransacao === entitie.anoTransacao) &&  
        (item.valorTransacao === entitie.valorTransacao)  
      )
        return false;
      else 
       return true ;
    });

    setEntities(filteredEntities);
    
  }
  

  
  let _entities: Transacoes[] = [
    {
      nome: "Luiz",
      ID: 1,
      valorTransacao: -1000,
      diaTransacao: 10,
      mesTransacao: 10,
      anoTransacao: 2020,
      classificacaoTransacao: "educacao",
    },
    {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -500,
        diaTransacao: 12,
        mesTransacao: 10,
        anoTransacao: 2020,
        classificacaoTransacao: "transporte",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: 200,
        diaTransacao: 13,
        mesTransacao: 10,
        anoTransacao: 2020,
        classificacaoTransacao: "alimentacao",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: 1000,
        diaTransacao: 1,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "salario",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -50,
        diaTransacao: 15,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "alimentacao",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -12.47,
        diaTransacao: 2,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "transporte",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -12.47,
        diaTransacao: 16,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "transporte",
      },

      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -12.47,
        diaTransacao: 17,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "transporte",
      },

      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: -12.47,
        diaTransacao: 18,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "transporte",
      },



  ]
