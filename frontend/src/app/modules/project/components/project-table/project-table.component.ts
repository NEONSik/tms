import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Project} from '../../model/project';
import {User} from '../../../user/model/user';
import {TaskService} from '../../../../services/task.service';
import {ProjectService} from '../../../../services/project.service';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {Page} from '../../../../models/page';



@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements AfterViewInit {
  public projects: Project[];
  public displayedColumns: string[] = ['id', 'projectCode', 'summary', 'projectManager', 'delete'];
  public dataSource: MatTableDataSource<Project>;
  public totalSize = 0;
  public pageSize = 10;
  public currentPage = 0;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private projectService: ProjectService) {
  }

  ngAfterViewInit(): void {
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
    this.projectService.getProjects(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<Project>) => {
        this.projects = data.content;
        this.dataSource = new MatTableDataSource(this.projects);
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
    this.projectService.getProjects(this.currentPage, this.pageSize, `${this.sort.active},${this.sort.direction}`)
      .subscribe((data: Page<Project>) => {
        this.projects = data.content;
        this.dataSource = new MatTableDataSource(this.projects);
        this.dataSource.sort = this.sort;
        this.totalSize = data.totalElements;
      });
  }

  public deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.updateData();
    });
  }
}

// editProject(editProject: Project) {
//   const dialogRef = this.dialog.open(EditprojectComponent);
//   dialogRef.componentInstance.editProject = editProject;
// }

