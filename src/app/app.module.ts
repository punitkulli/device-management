import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    ViewDeviceComponent,
    AddDeviceComponent,
    UpdateDeviceComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
