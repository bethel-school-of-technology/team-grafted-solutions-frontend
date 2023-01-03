import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Modules and Component
// import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './home-component/home.component';
// import { NewReleaseItemComponent } from './new-release-item/new-release-item.component';
import { SharedTranslate } from '../shared/translate/sharedTranslate.module';

// Services
// import { NewReleasesService } from './services/new-releases.service';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NewReleaseItemComponent } from '../new-release-item/new-release-item.component';
import { NewReleasesService } from './service/new-releases.service';
import { MusicPage } from './music.page';


@NgModule({
  declarations: [
    MusicPage,
    NewReleaseItemComponent,
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    PipesModule,
    HttpClientModule,
    SharedTranslate
  ],
  providers: [
    NewReleasesService
  ]
})
export class HomeModule { }



// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { MusicPage } from './music.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: MusicPage
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class MusicPageRoutingModule {}
