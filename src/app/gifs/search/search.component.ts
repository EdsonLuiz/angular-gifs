import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('searchtext') searchtext!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  handleSearch(event: any) {
    let valor = this.searchtext.nativeElement.value;
    this.gifsService.searchedGifs(valor);

    this.searchtext.nativeElement.value = ''
  }

}
