import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input()
  public testInput = '';
  // @Input()
  // music: Music = new Music();
  constructor() {}

  ngOnInit() {}
}
