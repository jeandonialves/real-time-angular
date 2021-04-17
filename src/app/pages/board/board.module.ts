import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { BoardService } from './services/board.service';
import { BoardComponent } from './board.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    BoardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule { }
