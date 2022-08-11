import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CorecConfigModule } from './modules/core-config/corec-config.module';

@NgModule({
  imports: [BrowserModule, FormsModule, CorecConfigModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
