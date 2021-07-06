import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewDeviceComponent } from '../view-device/view-device.component';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { UpdateDeviceComponent } from '../update-device/update-device.component';

const routes: Routes = [
  { path: '', redirectTo: '/addAssets', pathMatch: 'full' },
  { path: 'addAssets', component: AddDeviceComponent },
  { path: 'viewAssets', component: ViewDeviceComponent },
  { path: 'updateDevice', component: UpdateDeviceComponent },
  { path: 'updateDevice/:id', component: UpdateDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
