import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { Transacoes } from '../model/transacoes';

import { createEntitie, getEntities, removeEntities } from '../../../src/assets/db';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  
  private transacoesSubject = new BehaviorSubject<Transacoes[]>([]);

  // getTransacoesObservable$(): Observable<Transacoes[]> {
  //   return this.transacoesSubject.asObservable();
  // }

  get transacoes$(): Observable<Transacoes[]> {
    return this.transacoesSubject.asObservable();
  }


  getTransacoes(user: string ): Observable<Transacoes[]> {
    return of(getEntities())
     .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  }

  removeTransacao(transacao): Observable<Transacoes[]> {
    removeEntities(transacao);
    return of(getEntities())
     .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  }

  createTransacao(transacao): Observable<Transacoes[]> {
    createEntitie(transacao);
    return of(getEntities())
     .pipe(delay(2000)); /// se colocar o delay ele entra como undefined 
  }




  // getfiltraMesAno(user: string ,mes:number,ano:number ){
  //      this.todosService.toggleDone(id)
  //     .subscribe(todo =>
  //       this.list = this.listSubject.value
  //         .map(item => item.id === todo.id ? todo : item),
  //     );
  // }
  // getTransacoesMes(mes: number): Observable<Transacoes[]> {
  //   this.todosService.getList(page)
  //     .subscribe(list => {
  //       if (page === 0) {
  //         this.list = list;
  //       } else {
  //         this.list = [...this.listSubject.value, ...list];
  //       }
  //     });
  // }




}
