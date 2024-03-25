import {  Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-lazy-images',
    templateUrl: './lazy-images.component.html'
})
export class LazyImagesComponent implements OnInit {
  @Input()
  public url!:string;

  @Input()
  public alt:string= '';

  public hasLoaded: boolean =false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url no encontrada');
  }

  onLoad():void{
    setTimeout(() => {
      console.log('Se ha cargado');
      this.hasLoaded = true;
    },1000)

  }
}
