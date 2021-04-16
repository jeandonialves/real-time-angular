import { Project } from './../models/project.model';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

    private itemsRef: AngularFireList<any> | undefined;

    constructor(
        private db: AngularFireDatabase
    ) { }

    getAll(): Observable<Project[]> | undefined {
        this.itemsRef = this.db.list('projects');

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }
}
