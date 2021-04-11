import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { Pqrs } from '../models/pqrs.mode';


@Injectable({
  providedIn: 'root'
})

export class PqrsService {
  pqrs?: Pqrs;

  constructor( private firestore: AngularFirestore) { }

  createPQRS(pqrs: Pqrs): Promise<any> {
    return this.firestore.collection('PQRS').add(pqrs);
  }

  getPQRS(usuario: string): Observable<any>{
    //return this.firestore.collection('PQRS', ref =>  ref.orderBy('fechaTransaccion','asc')).snapshotChanges();
    return this.firestore.collection('PQRS', ref =>  ref.where("usuario", "==", usuario)).snapshotChanges();
  }
 

}

