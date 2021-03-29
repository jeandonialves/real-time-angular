import { Person } from './../../models/person.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.db.list('people').valueChanges().subscribe((data: any) => {
      this.people = data;
      console.log(data);
    });
  }

}
