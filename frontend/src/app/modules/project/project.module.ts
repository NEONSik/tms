import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectService} from '../../services/project.service';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {
  MatButtonModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSnackBarModule, MatSortModule,
  MatTableDataSource, MatTableModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectTableComponent} from './components/project-table/project-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProjectPageComponent} from './components/project-page/project-page.component';
import {NavBarModule} from '../header/nav-bar.module';
import {TaskModule} from '../task/task.module';

import {RouterModule} from '@angular/router';

import {MatAutocompleteModule} from '@angular/material';
import {EditProjectComponent} from './components/edit-project/edit-project.component';
import {TransitEventsService} from '../../services/transit-events.service';
import {CheckValuePipe} from '../task/pipes/check-value.pipe';


@NgModule({
  declarations: [NewProjectComponent, ProjectTableComponent, ProjectPageComponent, EditProjectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NavBarModule,
    TaskModule,
    RouterModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [ProjectService, TransitEventsService],
  exports: [NewProjectComponent, ProjectTableComponent],
  entryComponents: [NewProjectComponent]
})
export class ProjectModule {
}
