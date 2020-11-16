import { Transacoes } from "../app/model/Transacoes";

export function getEntities() {
    return _entities;
  }
  
  export function setEntities(entities: Transacoes[]) {
    _entities = entities;
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
        diaTransacao: 2,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "alimentacao",
      },
      {
        nome: "Luiz",
        ID: 1,
        valorTransacao: 100,
        diaTransacao: 2,
        mesTransacao: 11,
        anoTransacao: 2020,
        classificacaoTransacao: "freelance",
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

  ]