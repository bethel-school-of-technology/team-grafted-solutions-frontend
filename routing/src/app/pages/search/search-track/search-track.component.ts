import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-track-item',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.scss']
})
export class SearchTrackComponent implements OnInit {
  @Input() track: any;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // navigates to album
  public navigate(track: any): void {
    console.log('id', track.album.id);
    this.router.navigate(['/album', track.album.id]);
  }

}
