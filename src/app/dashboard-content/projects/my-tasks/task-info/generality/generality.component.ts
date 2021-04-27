import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generality',
  templateUrl: './generality.component.html',
  styleUrls: ['./generality.component.scss']
})
export class GeneralityComponent implements OnInit {

  allMode: string;
  checkBoxesMode: string;

  constructor() {
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
  }


  ngOnInit(): void {
  }

}
