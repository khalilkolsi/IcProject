import { Component, OnInit } from '@angular/core';
import { DeadLineService } from '../deadline/deadline.service';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent implements OnInit {

  lists: any[] = [];
  statuses: string[] = ["Overdue", "Due today", "Due this week", "Due next week", "No deadline"];
  employees: Object = {};

  constructor (service: DeadLineService) {
      const tasks = service.getTasks();

      this.employees = service.getEmployees()

      /*service.getEmployees().forEach(employee => {
          this.employees[employee.Name] = employee.Name;
      })*/

      this.statuses.forEach(status => {
          this.lists.push(tasks.filter(task => task.Task_Status === status));
      });
  }

  onListReorder(e: any) {
      const list = this.lists.splice(e.fromIndex, 1)[0];
      this.lists.splice(e.toIndex, 0, list);

      const status = this.statuses.splice(e.fromIndex, 1)[0];
      this.statuses.splice(e.toIndex, 0, status);
  }

  onTaskDragStart(e: any) {
      e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e: any) {
      e.fromData.splice(e.fromIndex, 1);
      e.toData.splice(e.toIndex, 0, e.itemData);
  }

  ngOnInit(): void {
  }

}
