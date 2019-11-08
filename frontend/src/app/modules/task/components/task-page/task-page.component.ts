import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../services/task.service';
import {Taskpage} from '../../model/task';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task: Taskpage;

  // tslint:disable-next-line:variable-name
  constructor(private taskService: TaskService) {
  }
  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  // }
  ngOnInit() {
    this.taskService.getTasks().subscribe((task: Taskpage[]) => {
      this.task = task[0];
    });
  }

}
// @Component({
//   selector: 'app-sheet',
//   templateUrl: 'sheet.html',
// })
// export class BottomSheetOverviewExampleSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
//
//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }
