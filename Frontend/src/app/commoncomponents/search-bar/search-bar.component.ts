import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;
  placeholder: string = "";
  searchValue: string = "";
  @Input() placeholderValue: string = "Search";
  @Input() notEditable: boolean = false;
  @Output() searchField = new EventEmitter();

  @Input() searchBar: {childDivStyle: {}, inputStyle?: {}} = {
    childDivStyle : {'margin': '1em 0em 0.4em 0em'},
    inputStyle : {'border': 'default'}
  }

  constructor() { }

  ngOnInit(): void {
    this.setPlaceholderValue();
  }
  private setPlaceholderValue() : void {
    this.placeholder = this.placeholderValue;
  }

  clearSearchField(){
    this.searchValue="";
    this.search.nativeElement.focus();
    this.emitCurrentValue();
  }

  emitCurrentValue(){
    this.searchField.emit(this.searchValue);
  }
}
