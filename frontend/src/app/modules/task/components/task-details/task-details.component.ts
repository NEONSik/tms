import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.task = {
      id: 1,
      createDate: 1570908890000,
      description: 'Fix styles on user page',
      dueDate: 1570908890000,
      estimation: 172800000,
      priority: 'BLOCKER',
      status: 'OPEN',
      ticketCode: 'CRM-1',
      updateDate: 1570908890000,
      assignee: {
        id: 3,
        password: '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK',
        role: 'DEVELOPER',
        email: 'kirill@mail.ru'
      },
      project: {
        id: 1,
        projectCode: 'CRM',
        summary: 'CRM system for BigBang.corp',
        projectManager: {
          id: 2,
          password: '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK',
          role: 'PROJECT_MANAGER',
          email: 'vasya@mail.ru'
        }
      },
      reporter: {
        id: 2,
        password: '$2a$10$lFg7NGomSeI/h9A26vtWKutC8mGJln3.kCxuEyyaz4U24Lmb1mlXK',
        role: 'PROJECT_MANAGER',
        email: 'vasya@mail.ru'
      }
    };
  }

}
