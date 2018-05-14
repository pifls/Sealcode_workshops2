import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: string;
  tasks: Array<string> = [];


  add() {
    this.task = this.task.replace(/\s+/g, ' ').trim();
    if (this.task !== '') {
    this.tasks.push(this.task);
  }
    this.task = '';
  }

  delete(task: string, index: number) {
     this.tasks = this.tasks.filter((e, i) => e !== task || i !== index);
  }

}
