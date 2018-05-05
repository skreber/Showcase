import {Component, Input} from "@angular/core";
import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";

@Component({
  selector: "educama-caseui-center-area",
  templateUrl: "./case-ui-center-area.component.html"
})
export class CaseUiCenterAreaComponent {
  @Input()
  public shipment: ShipmentResource;

  @Input()
  public invoice: any;


  constructor() {
  }
}
