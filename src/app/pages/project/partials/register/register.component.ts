import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      description: ['']
    });
  }

  submit(): void {
    this.projectService.add(this.form.value)
    .then(() => {
      this.dialogRef.close();
    }).catch(error => {
      console.log('error');
    });
  }
}
