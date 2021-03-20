import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('searchtext') searchtext!: ElementRef<HTMLInputElement>;



  handleSearch(event: any) {
    let valor = this.searchtext.nativeElement.value;
    console.log(valor)

    this.searchtext.nativeElement.value = ''
  }

}
