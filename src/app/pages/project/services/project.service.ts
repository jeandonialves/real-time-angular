import { Track } from './../models/track.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Task } from '../models/task.model';
import { Project } from './../models/project.model';


@Injectable()
export class ProjectService {

    private itemsRef: AngularFireList<any> | undefined;
    private itemRef: AngularFireObject<any> | undefined;

    constructor(
        private db: AngularFireDatabase
    ) { }

    getAllProjects(): Observable<Project[]> | undefined {
        this.itemsRef = this.db.list('projects');

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    getProjectById(id: string): Observable<Project> | undefined {
        this.itemRef = this.db.object('projects/' + id);

        return this.itemRef.snapshotChanges().pipe(
            map(c => ({ id: c.payload.key, ...c.payload.val() })
        ));
    }

    addProject(project: Project): Promise<any> {
        return Promise.resolve(this.db.list('projects').push(project));
    }

    updateProject(idProject: string, project: Project): Promise<any> {
        return Promise.resolve(this.db.list('projects').update(idProject, project));
    }

    getAllTracks(idProject: string): Observable<Track[]> | undefined {
        this.itemsRef = this.db.list(`projects/${idProject}/tracks`);

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    addTrack(idProject: string, status: string): Promise<any> {
        return Promise.resolve(this.db.list(`projects/${idProject}/tracks`).push({ status }));
    }

    updateTrack(idProject: string, idItem: string, item: Task): Promise<any> {
        return Promise.resolve(this.db.list(`projects/${idProject}/tracks`).update(idItem, item));
    }

    getAllTasks(idProject: string, idTrack: string): Observable<Task[]> | undefined {
        this.itemsRef = this.db.list(`projects/${idProject}/tracks/${idTrack}/tasks`);

        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    addTask(idProject: string, idTrack: string, status: string): Promise<any> {
        return Promise.resolve(this.db.list(`projects/${idProject}/tracks/${idTrack}/tasks`).push({ status }));
    }

    updateTask(idProject: string, idTrack: string, idTask: string, task: Task): Promise<any> {
        return Promise.resolve(this.db.list(`projects/${idProject}/tracks/${idTrack}/tasks`).update(idTask, task));
    }
}
