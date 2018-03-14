import {SharedModule} from "../../shared/shared.module";
import {OrganizeFlightFormComponent} from "./presentationals/organize-flight-form.component";
import {NgModule} from "@angular/core";
import {OrganizeFlightFormPageComponent} from "./container/organize-flight-form-page.component";
import {CalendarModule} from "primeng/primeng";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CalendarModule
  ],
  declarations: [
    OrganizeFlightFormComponent,
    OrganizeFlightFormPageComponent
  ],
  exports: [
    OrganizeFlightFormComponent
  ]
})
export class OrganizeFlightFormModule {
}
