import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GiftsService {
  public gifList:Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey:string = '0nCM10ij9VdDQcz9a1ugLygXwxgPx2xf';
  private url:string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.cargarLocalStorage();
   }


  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organiza(tag:string){
    tag = tag.toLowerCase();

    if (this.tagsHistory.includes(tag)) {
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag!= tag );
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private cargarLocalStorage():void{
    if (!localStorage.getItem('history')) {
      return;
    }
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);
  }
  searchTag(tag:string):void{
    if (tag.length == 0) {
      return;
    }

    this.organiza(tag);
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit',10)
    .set('q',tag)
    this.http.get<SearchResponse>(`${this.url}/search`,{ params })
    .subscribe(
      (resp)=>{
        this.gifList = resp.data;

      }
    );
  }
}
