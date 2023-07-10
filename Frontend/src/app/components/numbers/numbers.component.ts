import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  searchValue: string;
  updateSearchValue(emittedValue: string){
    this.searchValue = emittedValue;
  }
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backButton() {
    this.location.back();
  }
}
