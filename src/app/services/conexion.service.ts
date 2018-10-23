import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>
  items: Observable<Item[]>;
  
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
   
  
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  listaItem(){
    return this.items;
  }
  removeItem(id:number){
    this.itemDoc = this.afs.doc<Item>(`items/${id}`)
    this.itemDoc.delete();
  }
  editarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`)
    this.itemDoc.update(item);
  }
}
