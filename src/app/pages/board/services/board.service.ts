import { Item } from './../models/item.model';
import { Board } from '../models/board.model';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class BoardService {

    private itemsRef: AngularFireList<any> | undefined;

    constructor(
        private db: AngularFireDatabase
    ) { }

    getAll(idProject: string): Observable<Board[]> | undefined {
        this.itemsRef = this.db.list(`projects/${idProject}/boards`);

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    getItems(idProject: string, idBoard: string): Observable<Item[]> | undefined {
        this.itemsRef = this.db.list(`projects/${idProject}/boards/${idBoard}/items`);

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }
}
