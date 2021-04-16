import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project.model';

import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.getAll()?.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }
}
