import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Item } from './../models/item.model';
import { Project } from './../models/project.model';


@Injectable()
export class ProjectService {

    private itemsRef: AngularFireList<any> | undefined;
    private itemRef: AngularFireObject<any> | undefined;

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

    getById(id: string): Observable<Project> | undefined {
        this.itemRef = this.db.object('projects/' + id);

        return this.itemRef.snapshotChanges().pipe(
            map(c => ({ id: c.payload.key, ...c.payload.val() })
        ));
    }

    add(project: Project): Promise<any> {
        return Promise.resolve(this.db.list('projects').push(project));
    }

    update(idProject: string, project: Project): Promise<any> {
        return Promise.resolve(this.db.list('projects').update(idProject, project));
    }

    getItems(idProject: string): Observable<Item[]> | undefined {
        this.itemsRef = this.db.list(`projects/${idProject}/items`);

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }
}
