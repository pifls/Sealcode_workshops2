import { Component, OnInit } from '@angular/core';
import { tasks } from './tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  task: string;
  tasks: Array<string> = [];


  add() {
    this.task = this.task.replace(/\s+/g, ' ').trim();
    if (this.task !== '') {
      if (this.tasks.indexOf(this.task) > -1) {
        alert('You cannot add a task which already exists');
      } else {
    this.tasks.push(this.task);
  }
  } else {
    alert('You cannot add an empty task');
  }
    this.task = '';
  }

  delete(task: string) {
     this.tasks = this.tasks.filter(e => e !== task);
  }

  constructor() { }

  ngOnInit {

  }

}
