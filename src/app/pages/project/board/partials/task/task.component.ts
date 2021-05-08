import { Task } from '../../../models/task.model';
import { ProjectService } from '../../../services/project.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Input() idProject = '';
  @Input() idTrack = '';

  titleFormControl = new FormControl('');

  editing = false;
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.setValueTitle(this.task.name);
  }

  edit(): void {
    this.editing = true;
    this.setValueTitle(this.task.name);
    setTimeout(() => {
      const el = document.getElementById('textarea');
      if (el) {
        el.focus();
      }
    }, 100);
  }

  closeEditing(): void {
    this.editing = false;
  }

  save(): void {
    this.task.name = this.titleFormControl.value.trim();
    this.projectService.updateTask(this.idProject, this.idTrack, this.task.id, this.task).then(() => {
      this.setValueTitle(this.task.name);
      this.closeEditing();
    }, error => {
      console.error(error);
    });
  }

  setValueTitle(title: string): void {
    this.titleFormControl.setValue(title);
  }

}
