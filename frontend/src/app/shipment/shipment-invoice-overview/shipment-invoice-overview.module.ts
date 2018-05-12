import {ShipmentInvoiceOverviewComponent} from "./presentationals/shipment-invoice-overview.component";
import {ShipmentInvoiceOverviewPageComponent} from "./container/shipment-invoice-overview-page.component";
import {SharedModule} from "../../shared/shared.module";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ShipmentInvoiceOverviewComponent,
    ShipmentInvoiceOverviewPageComponent
  ],
  exports: [
    ShipmentInvoiceOverviewComponent
  ]
})
export class ShipmentInvoiceOverviewModule {
}
