import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() title: string | undefined;
  titleFormControl = new FormControl('');

  editing = false;
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor() { }

  ngOnInit(): void {
    this.titleFormControl.setValue(this.title);
  }

  edit(): void {
    this.editing = true;
    this.titleFormControl.setValue(this.title);
    setTimeout(() => {
      const el = document.getElementById('textarea');
      if (el) {
        el.focus();
      }
    }, 100);
  }

  cancel(): void {
    this.editing = false;
  }

  save(): void {

  }

}
