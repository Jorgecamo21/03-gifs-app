import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifts-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private giftsService:GiftsService){}

  get gifs():Gif[]{
    return this.giftsService.gifList;
  }
}
