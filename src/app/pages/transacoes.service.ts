import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { Transacoes } from '../model/transacoes';

// import { createEntitie, getEntities, removeEntities } from '../../../src/assets/db';
import { catchError, delay} from 'rxjs/operators';

import { environment } from '@env/environment';

const routes = {
  listatransacoes: () => `${environment.UrlServer}/listatransacoes`,
};


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',

    //Authorization: 'my-auth-token'
  }),
};


@Injectable({
  providedIn: 'root'
})

export class TransacoesService {
  
  // private transacoesSubject = new BehaviorSubject<Transacoes[]>([]);

  // getTransacoesObservable$(): Observable<Transacoes[]> {
  //   return this.transacoesSubject.asObservable();
  // }

  // get transacoes$(): Observable<Transacoes[]> {
  //   return this.transacoesSubject.asObservable();
  // }

   constructor(private httpClient: HttpClient) {}


  // getTransacoes(user: string ): Observable<Transacoes[]> {

  //   return of(getEntities())
  //    .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  // }

  // removeTransacao(transacao): Observable<Transacoes[]> {
  //   removeEntities(transacao);
  //   return of(getEntities())
  //    .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  // }

  // createTransacao(transacao): Observable<Transacoes[]> {
  //   createEntitie(transacao);
  //   return of(getEntities())
  //    .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  // }

  

  

  getTransacoesHTTP() {
      return this.httpClient.get(routes.listatransacoes())
    .pipe(catchError(() => of('Error, could not load users')));
  }


  removeTransacaoHTTP(id: number): Observable<{}> {
    return this.httpClient
    .delete(routes.listatransacoes() + `/${id}`, httpOptions)
    .pipe(catchError(() => of('Error, could not load users')));
  }

  
  // postTransacao(transacao: Transacoes): Observable<Transacoes> {
  //   console.log(transacao);
  //   return this.httpClient.post<Transacoes>(routes.listatransacoes(), transacao);
  // }

  postTransacao(transacao: any): Observable<any>  {
    let nome = transacao['nome'];
    let valorTransacao = transacao['valorTransacao'];
    let diaTransacao = transacao['diaTransacao'];
    let mesTransacao = transacao['mesTransacao'];
    let anoTransacao = transacao['anoTransacao'];
    let classificacaoTransacao = transacao['classificacaoTransacao'];

    let body = 
    `nome=${nome}&valorTransacao=${valorTransacao}&diaTransacao=${diaTransacao}&mesTransacao=${mesTransacao}&anoTransacao=${anoTransacao}&classificacaoTransacao=${classificacaoTransacao}`;



   
    console.log(routes.listatransacoes());
    console.log("corpo",body);
    return this.httpClient.post(routes.listatransacoes(), body, httpOptions)
    .pipe(catchError(() => of('Error, could not load users')));
  }



}
