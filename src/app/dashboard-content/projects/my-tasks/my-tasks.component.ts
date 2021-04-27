import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  testData = ['filter1', 'filter2']

  constructor() { }

  ngOnInit(): void {
  }

}
