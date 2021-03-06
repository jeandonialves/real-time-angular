import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Project } from './models/project.model';
import { RegisterComponent } from './partials/register/register.component';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  loading = false;

  constructor(
    private projectService: ProjectService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getAllProjects()?.subscribe((projects: Project[]) => {
      this.projects = projects;
      this.loading = false;
    });
  }

  newProject(): void {
    this.dialog.open(RegisterComponent, {
      data: {
        form: 'new'
      }
    });
  }

  editProject(project: Project): void {
    this.dialog.open(RegisterComponent, {
      data: {
        form: 'edit',
        obj: project
      }
    });
  }
}
