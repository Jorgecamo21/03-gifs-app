
import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor (private giftsService:GiftsService){
  }
  mostrarTagHistorial(tag:string):void{
    this.giftsService.searchTag(tag);
  }
  mostrar():string[]{
    return this.giftsService.tagsHistory
  };

 }
