import {NgModule} from '@angular/core';
import {SharedLibModule} from "./shared-lib.module";


@NgModule({
  imports: [
    SharedLibModule
  ],
  exports:[SharedLibModule],
  declarations: [],
})
export class SharedModule {
}
