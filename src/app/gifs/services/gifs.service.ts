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
    const itemAlreadyExists = this._historic.includes(query)
    const isBlankOrEmpty = !query.trim()

    if(isBlankOrEmpty || itemAlreadyExists) return;

    query = query.trim().toLocaleLowerCase()

    this._historic.unshift(query)
    this._historic = this._historic.splice(0, 10)
  }
}
