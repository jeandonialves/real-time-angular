import { Task } from '../../../models/task.model';
import { ProjectService } from './../../../services/project.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: Task;
  @Input() idProject = '';

  titleFormControl = new FormControl('');

  editing = false;
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.setValueTitle(this.item.name);
  }

  edit(): void {
    this.editing = true;
    this.setValueTitle(this.item.name);
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
    // this.item.name = this.titleFormControl.value.trim();
    // this.projectService.updateItem(this.idProject, this.item.id, this.item).then(() => {
    //   this.setValueTitle(this.item.name);
    //   this.closeEditing();
    // }, error => {
    //   console.error(error);
    // });
  }

  setValueTitle(title: string): void {
    this.titleFormControl.setValue(title);
  }

}
