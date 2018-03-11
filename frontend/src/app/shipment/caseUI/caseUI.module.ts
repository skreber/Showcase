import {LeftSideBarModule} from "./caseUI-leftSideBar/leftSideBar.module";
import {NgModule} from "@angular/core";
import {CaseUiComponent} from "./caseUi.component";
import {CaseUIShipmentDetailModule} from "./caseUI-shipmentDetail/caseUI-shipmentDetail.module";
import {CaseUICenterAreaComponent} from "./caseUI-centerArea/caseUI-centerArea.component";
import {CaseUICenterAreaModule} from "./caseUI-centerArea/caseUI-centerArea.module";

@NgModule({
  imports: [
    LeftSideBarModule,
    CaseUIShipmentDetailModule,
    CaseUICenterAreaModule
  ],
  declarations: [
    CaseUiComponent
  ],
  exports: [
    CaseUiComponent
  ]
})
export class CaseUIModule {
}
