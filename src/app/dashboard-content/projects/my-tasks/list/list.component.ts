import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allMode: string;
  checkBoxesMode: string;

  constructor() { 
    this.allMode = 'allPages';
    this.checkBoxesMode = 'onClick'
  }

  ngOnInit(): void {
  }

}
