import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '.app-routing.module';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ViewDeviceComponent,
    AddDeviceComponent,
    UpdateDeviceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
