import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[
    HomePageComponent
  ]
})
export class GiftsModule { }
