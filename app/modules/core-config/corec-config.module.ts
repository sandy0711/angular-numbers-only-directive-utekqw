import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { AllowInputsDirective } from '../../directives/allow-inputs.directive';
import { TwoDigitDecimaNumberDirective } from '../../directives/two-digit-decima-number.directive';
import { ExpandTextDirective } from '../../directives/expand-text.directive';
import { DtLoadingDirective } from '../../directives/dt-loading.directive';
import { RelativeLoaderDirective } from '../../directives/relative-loader.directive';
import { SpinLoadingDirective } from '../../directives/loaders.directive';
import { TooltipDirective } from '../../directives/tooltip.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoadingComponent,
    AllowInputsDirective,
    TwoDigitDecimaNumberDirective,
    ExpandTextDirective,
    DtLoadingDirective,
    RelativeLoaderDirective,
    SpinLoadingDirective,
    TooltipDirective,
  ],
  exports: [
    LoadingComponent,
    AllowInputsDirective,
    TwoDigitDecimaNumberDirective,
    ExpandTextDirective,
    DtLoadingDirective,
    RelativeLoaderDirective,
    SpinLoadingDirective,
    TooltipDirective,
  ],
  entryComponents: [LoadingComponent],
})
export class CorecConfigModule {}
