import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../../../services/user.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Page} from '../../../../models/page';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements AfterViewInit {
  public users: User[];
  public displayedColumns: string[] = ['email', 'role', 'delete'];
  public dataSource: MatTableDataSource<User>;
  public totalSize = 0;
  public pageSize = 10;
  public currentPage = 0;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService) {
  }

  ngAfterViewInit(): void {
    this.sort.active = 'email';
    this.sort.direction = 'asc';
    this.getData();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateData();
  }

  private getData() {
    this.userService.getUserAll(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<User>) => {
        this.users = data.content;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }

  private updateData() {
    if (this.sort.active === '' || this.sort.direction === '') {
      this.sort.active = 'email';
      this.sort.direction = 'asc';
    }
    this.userService.getUserAll(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<User>) => {
        this.users = data.content;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.updateData();
    });
  }
}
