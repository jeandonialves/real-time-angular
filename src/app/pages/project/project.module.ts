import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from './../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectService } from './services/project.service';
import { RegisterComponent } from './partials/register/register.component';
import { BoardComponent } from './board/board.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTrackComponent } from './board/partials/card-track/card-track.component';
import { TaskComponent } from './board/partials/task/task.component';

@NgModule({
  declarations: [
    ProjectComponent,
    RegisterComponent,
    BoardComponent,
    CardTrackComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    DragDropModule,
    SharedModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
