import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../services/project.service';
import { Item } from './../models/item.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  items: Item[] = [];
  idProject!: string;
  loading = false;

  todo: Item[] = [];
  doing: Item[] = [];
  done: Item[] = [];

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.idProject = params.idProject;
      this.projectService.getItems(this.idProject)?.subscribe((items: Item[]) => {
        this.items = items;
        this.todo = this.items.filter(obj => obj.status === 'TODO');
        this.doing = this.items.filter(obj => obj.status === 'DOING');
        this.done = this.items.filter(obj => obj.status === 'DONE');
        this.loading = false;
      });
    });
  }

  newItem(): void {
    this.projectService.addNewItem(this.idProject, 'TODO')
      .catch(error => {
        this.snackBar.open('Ocorreu um erro!', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }

  statusSelected(event: string, idItem: string): void {
    const obj = this.items.find(item => item.id === idItem) as Item;
    obj.status = event;

    this.projectService.updateItem(this.idProject, idItem, obj).then(res => {
      
    });
  }
}
