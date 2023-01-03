import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { NewReleasesItem } from './models/new-release-model';
import { NewReleasesService } from './service/new-releases.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss']
})
export class MusicPage implements OnInit {
  public newReleases: NewReleasesItem[] = [];
  // public activeLanguage: string = 'en';

  constructor(
    private newReleasesService: NewReleasesService,
    private globalService: GlobalService,
    private translateService: TranslateService 
    ){  }

  ngOnInit(): void {
    // this.setLanguage();
    this.getNewReleases();
  }

  // call service to get new releases from spotify
  public getNewReleases(): void {
    this.newReleasesService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

  // scroll to element
  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView();
  }

  // set language
  // public setLanguage(): void {
  //   this.activeLanguage = this.globalService.getGlobalLanguage();
  //   this.translate.use(this.activeLanguage);
  // }
}


// import { Component, OnInit } from '@angular/core';
// import { Music } from '../models/music';
// import { MusicService } from './service/music.service';
// // import { MusicService } from '../service/music.service';



// @Component({
//   selector: 'app-music',
//   templateUrl: './music.page.html',
//   styleUrls: ['./music.page.scss'],
// })
// export class MusicPage implements OnInit {

//   music!: Music ;
//   searchTerm: string = ""
// newReleases: any;
//   constructor(private service: MusicService) { }

//   ngOnInit() {
//   }

//   searchMusic(){
//     this.service.searchMusic(this.searchTerm).subscribe(m=> this.music = m);
//   }
//   // searchItem(){
//   //   this.service.searchItem(this.searchTerm).subscribe(m=> this.music = m);
//   // }

//   sortArtist(){
//     this.service.sortArtist().subscribe(m => this.music = m);
//   }
  
//   sortSong(){
//     this.service.sortSong().subscribe(m => this.music = m);
//   }

// }
