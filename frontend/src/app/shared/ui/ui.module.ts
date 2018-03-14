import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CalendarModule} from "primeng/primeng";
import {
    AutoCompleteModule,
    BlockUIModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    PanelModule,
    TabViewModule
} from "primeng/primeng";

@NgModule({
    imports: [CommonModule,
    CalendarModule
    ],
    exports: [
        AutoCompleteModule,
        BlockUIModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        DataTableModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        MenubarModule,
        PanelModule,
        CalendarModule,
        TabViewModule
    ]
})
export class UIModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule,
      providers: []
    };
  }
}

