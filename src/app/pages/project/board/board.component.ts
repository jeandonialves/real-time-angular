import { Track } from './../models/track.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../services/project.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  idProject!: string;
  tracks: Track[] = [];

  loading = false;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.idProject = params.idProject;
      this.projectService.getAllTracks(this.idProject)?.subscribe((tracks: Track[]) => {
        this.tracks = tracks;

        this.tracks.map(track => {
          const tasks: Task[] = [];
          Object.entries(track.tasks).forEach(([key, value]) => {
            const task: Task = value;
            task.id = key;
            tasks.push(task);
          });
          track.tasks = tasks;
          return track;
        });

        console.log(this.tracks);
        this.loading = false;
      });
    });
  }



  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(event);
  }

  onTrackDrop(event: CdkDragDrop<Track[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log(event);
  }

  // statusSelected(event: string, idItem: string): void {
  //   const obj = this.items.find(item => item.id === idItem) as Item;
  //   obj.status = event;

  //   this.projectService.updateItem(this.idProject, idItem, obj).then(res => {

  //   });
  // }
}
