import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss']
})
export class SearchArtistComponent implements OnInit {
  @Input() artist: any;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // navigates to artist
  public navigate(artist: any): void {
    console.log('id', artist.id);
    this.router.navigate(['/artist', artist.id]);
  }
}
