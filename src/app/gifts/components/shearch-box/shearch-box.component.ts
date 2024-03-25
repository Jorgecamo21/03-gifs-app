import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text" class="form-control" placeholder="Buscar gift" (keydown.enter)="searchTag()" #texto>
  `
})

export class SearchBoxComponent  {
  @ViewChild('texto')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private giftsService:GiftsService) { }
  tags : string [] = this.giftsService.tagsHistory;
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.giftsService.searchTag(newTag);
    console.log(this.giftsService.tagsHistory);

    this.tagInput.nativeElement.value = '';

  }
}
