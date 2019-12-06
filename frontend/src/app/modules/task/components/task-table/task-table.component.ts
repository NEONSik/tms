import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../../project/model/project';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {ProjectService} from '../../../../services/project.service';
import {Page} from '../../../../models/page';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements AfterViewInit {
  public tasks: Task[];
  public displayedColumns: string[] = ['createDate', 'dueDate', 'priority', 'status', 'ticketCode', 'updateDate', 'assignee', 'project', 'reporter', 'delete'];
  public dataSource: MatTableDataSource<Task>;
  public totalSize = 0;
  public pageSize = 10;
  public currentPage = 0;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(private taskService: TaskService) {
  }

  ngAfterViewInit() {
    this.sort.active = 'id';
    this.sort.direction = 'asc';
    this.getData();
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateData();
  }

  private getData() {
    this.taskService.getTasks(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<Task>) => {
        this.tasks = data.content;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }

  private updateData() {
    if (this.sort.active === '' || this.sort.direction === '') {
      this.sort.active = 'id';
      this.sort.direction = 'asc';
    }
    this.taskService.getTasks(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<Task>) => {
        this.tasks = data.content;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }
  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.updateData();
    });
  }
}


