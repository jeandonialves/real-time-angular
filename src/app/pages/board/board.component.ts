import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BoardService } from './services/board.service';
import { Board } from './models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boards: Board[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.boardService.getAll(params.idProject)?.subscribe((boards: Board[]) => {
        this.boards = boards;
      });
    });
  }

}
