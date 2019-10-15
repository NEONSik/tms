import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectService} from '../../services/project.service';
import {ProjectDetailsComponent} from './components/project-details/project-details/project-details.component';


@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [ProjectService]
})
export class ProjectModule {
}
