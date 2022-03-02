import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './layout/main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./core/interceptor";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [MainComponent]
})
export class AppModule {
}
