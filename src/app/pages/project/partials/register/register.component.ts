import { Project } from './../../models/project.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProjectService } from '../../services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DataDialog {
  form: string;
  obj: Project;
}

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
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['']
    });

    if (this.data.form === 'edit') {
      this.form.patchValue({
        name: this.data.obj.name,
        description: this.data.obj.description
      });
    }
  }

  submit(): void {
    if (this.form.valid) {
      if (this.data.form === 'new') {
        this.add();
      } else {
        this.update();
      }
    }
  }

  add(): void {
    this.projectService.addProject(this.form.value)
      .then(() => {
        this.dialogRef.close();
        this.snackBar.open('Projeto cadastrado com sucesso!', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }).catch(error => {
        this.snackBar.open('Ocorreu um erro!', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }

  update(): void {
    this.projectService.updateProject(this.data.obj.id, this.form.value)
      .then(() => {
        this.dialogRef.close();
        this.snackBar.open('Projeto atualizado com sucesso!', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }).catch(error => {
        this.snackBar.open('Ocorreu um erro!', 'Fechar', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
