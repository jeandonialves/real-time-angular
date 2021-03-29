import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
  }

  submit(f: NgForm): void {


    this.db.list('people').push(
      {
        name: f.controls.name.value,
        lastName: f.controls.lastName.value
      }
    ).then(res => {
      console.log('sucess');
    }).catch(error => {
      console.log('error');
    });


    f.controls.name.setValue('');
    f.controls.lastName.setValue('');
  }

}
