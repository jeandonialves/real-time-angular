import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['name', 'description', 'status'];

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.projectService.getItems(params.idProject)?.subscribe((items: Item[]) => {
        this.items = items;
      });
    });
  }

  newItem() {
    console.log('ss');
  }
}
