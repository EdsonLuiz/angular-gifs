import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historic: string[] = [];

  get historic() {
    return [...this._historic];
  }

  searchedGifs(query: string) {
    if(!query.trim) return;

    this._historic.unshift(query)
    console.log(this._historic)
  }
}
