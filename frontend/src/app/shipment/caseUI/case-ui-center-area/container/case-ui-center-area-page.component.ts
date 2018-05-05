import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {State} from "../../../../app.reducers";
import {Store} from "@ngrx/store";
import {ShipmentCaptureSlice} from "../../../shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.slice";
import {RequestSingleShipment} from "../../../shipment-common/store/shipments/shipment-list-page/shipment-list-page.actions";
import {
  ReloadStoreAction,
  ResetShipmentCaptureSliceAction
} from "../../../shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {CaseUiCenterAreaPageModel} from "./case-ui-center-area-page.model";
import {TaskListSlice} from "../../../shipment-common/store/tasks/task-list-page.slice";


@Component({
  selector: "educama-caseui-shipment-detail-page",
  templateUrl: "./case-ui-shipment-detail-page.component.html"
})
export class CaseUIShipmentDetailPageComponent implements OnInit, OnDestroy, OnChanges {

  // TODO: Invoice slice subscr.

  // relevant slice of store and subscription for this slice
  public shipmentSlice: Observable<ShipmentCaptureSlice>;


  public shipmentSliceSubscription: Subscription;
  public invoiceSliceSubscription: Subscription;
  public selectedTask: string;

  // model for the page
  public shipmentDetailInfoModel: CaseUiCenterAreaPageModel = new CaseUiCenterAreaPageModel();

  constructor(private _activatedRoute: ActivatedRoute,
              private _store: Store<State>) {

    this.shipmentSlice = this._store.select(state => state.shipmentCaptureSlice);
    this.shipmentSliceSubscription = this.shipmentSlice.subscribe(
      shipmentCaptureSlice => this.updateShipmentModel(shipmentCaptureSlice)
    );
  }

  public ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
        this._store.dispatch(new ReloadStoreAction(params["id"]));
      });
    this.selectedTask = this._activatedRoute.url[2];
  }

  public ngOnChanges() {
    this._activatedRoute.params.subscribe(params => {
        this._store.dispatch(new ReloadStoreAction(params["id"]));
      });
  }

  public ngOnDestroy() {
    this.shipmentSliceSubscription.unsubscribe();
  }

  // ***************************************************
  // Event Handler
  // ***************************************************


  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private updateShipmentModel(shipmentCaptureSlice: ShipmentCaptureSlice) {
    this.shipmentDetailInfoModel.shipment = shipmentCaptureSlice.shipment;
  }
}
