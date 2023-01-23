import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { CardsPageModule } from '../cards/cards.module';

@NgModule({
  declarations: [SearchPage],
  imports: [CommonModule, FormsModule, IonicModule, SearchPageRoutingModule, CardsPageModule, CardsPageModule],
})
export class SearchPageModule {}
