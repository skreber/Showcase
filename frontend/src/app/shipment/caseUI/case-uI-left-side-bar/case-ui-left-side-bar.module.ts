import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TaskListModule} from "../../task-list/task-list.module";
import {EnabledTaskListModule} from "../../enabled-task-list/enabled-task-list.module";
import {LeftSideBarComponent} from "./case-ui-left-side-bar.component";
import {CompletedTaskListModule} from "../../completed-task-list/completed-task-list.module";

@NgModule({
  imports: [
    SharedModule,
    TaskListModule,
    EnabledTaskListModule,
    CompletedTaskListModule
  ],
  declarations: [
    LeftSideBarComponent
  ],
  exports: [
    LeftSideBarComponent
  ]
})
export class LeftSideBarModule {
}
