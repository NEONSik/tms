import {Component, OnInit} from '@angular/core';
import {Project} from '../../../project/model/project';
import {MatTableDataSource} from '@angular/material';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  public taskTable: Task[];
  public displayedColumns: string[] = ['createDate', 'dueDate', 'priority', 'status', 'ticketCode', 'updateDate', 'assignee', 'project', 'reporter'];
  public dataSource: MatTableDataSource<Task>;
  public totalSize = 0;

  constructor(private tasksetvice: TaskService) {
  }

  ngOnInit() {
    this.getTable();
  }

  private getTable() {
    this.tasksetvice.getTasks().subscribe((taskTable: Task[]) => {
      this.taskTable = taskTable;
      this.dataSource = new MatTableDataSource(this.taskTable);
      this.totalSize = this.taskTable.length;
    });
  }
}
