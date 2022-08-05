import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  AllowInputsDirective,
} from './directives/allow-inputs.directive';
import { TwoDigitDecimaNumberDirective } from './directives/two-digit-decima-number.directive';
import { ExpandTextDirective } from './directives/expand-text.directive';
import { DtLoadingDirective } from './directives/dt-loading.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { RelativeLoaderDirective } from './directives/relative-loader.directive';
import { SpinLoadingDirective } from './directives/loaders.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    LoadingComponent,
    AllowInputsDirective,
    TwoDigitDecimaNumberDirective,
    ExpandTextDirective,
    DtLoadingDirective,
    RelativeLoaderDirective,
    SpinLoadingDirective
  ],
  entryComponents: [LoadingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
