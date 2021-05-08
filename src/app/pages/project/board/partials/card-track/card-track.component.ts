import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.scss']
})
export class CardTrackComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() color = 'grey';

  constructor() { }

  ngOnInit(): void {
  }

}
