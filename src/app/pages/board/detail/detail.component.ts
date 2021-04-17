import { Item } from './../models/item.model';
import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  items: Item[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.boardService.getItems(params.idProject, params.idBoard)?.subscribe((items: Item[]) => {
        this.items = items;
      });
    });
  }

}
