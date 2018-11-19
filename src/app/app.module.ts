import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';

import * as $ from "jquery";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient,HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './main-page/main-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {ClearSpacePipe} from './_pipe/clear-space.pipe';
import {SafePipe} from './_pipe/safe.pipe';
import { MainComponent } from './main/main.component';
import {DataService} from './data.service';
import {RouterModule} from '@angular/router';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ClearSpacePipe,
    SafePipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    [
      {
        provide:LocationStrategy,
        useClass:HashLocationStrategy
      }
    ],
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
