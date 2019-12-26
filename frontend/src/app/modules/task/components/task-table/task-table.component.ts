import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TaskService} from '../../../../services/task.service';
import {Task} from '../../model/task';
import {Page} from '../../../../models/page';
import {TransitEventsService} from '../../../../services/transit-events.service';
import {ParseToken} from '../../../../models/parse-token';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements AfterViewInit {
  public tasks: Task[];
  public displayedColumns: string[] = ['priority', 'status', 'ticketCode', 'assignee', 'project', 'reporter', 'delete'];
  public dataSource: MatTableDataSource<Task>;
  token: string;
  roleFromToken: ParseToken = new ParseToken();
  strings: string[];
  userId: number;
  public totalSize = 0;
  public pageSize = 10;
  public currentPage = 0;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(private transitEventsService: TransitEventsService, private taskService: TaskService) {
    this.token = localStorage.getItem('token');
    this.strings = this.token.split('.');
    const payload = JSON.parse(atob(this.strings[1]));
    this.roleFromToken.scopes = payload.scopes;
    this.userId = parseFloat(payload.id);
    this.transitEventsService.myMethod$.subscribe((data) => {
      this.updateDataByRole(this.roleFromToken.scopes);
    });
  }

  ngAfterViewInit() {
    this.sort.active = 'id';
    this.sort.direction = 'asc';
    this.checkRole(this.roleFromToken.scopes);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateDataByRole(this.roleFromToken.scopes);
  }

  checkRole(role: string) {
    switch (role) {
      case 'Developer':
        this.getData();
        break;
      case 'Tester':
        this.getData();
        break;
      default:
        this.getDataAll();
        break;
    }
  }

  updateDataByRole(role: string) {
    switch (role) {
      case 'Developer':
        break;
      case 'Tester':
        break;
      default:
        this.updateDataAll();
        break;
    }
  }

  private getData() {
    this.taskService.getTasksByAssignUser(this.userId)
      .subscribe((data: Page<Task>) => {
        this.tasks = data.content;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = data.numberOfElements;
      });
  }

  private getDataAll() {
    this.taskService.getTasks(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<Task>) => {
        this.tasks = data.content;
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }


  private updateDataAll() {
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
      this.updateDataByRole(this.roleFromToken.scopes);
    });
  }
}


