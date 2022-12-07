import { Component, OnInit } from '@angular/core';
import { InputSearchValues } from 'src/app/models/header-input-data.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public inputData: EventEmitter<InputSearchValues> = new EventEmitter<InputSearchValues>();

  constructor() { }

  public searchData: InputSearchValues = {
    inputData: "",
  }

  public submitSearch(): void {
    this.inputData.emit(this.searchData);
  }

  ngOnInit() {
  }

}
