import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangDetailPageRoutingModule } from './barang-detail-routing.module';

import { BarangDetailPage } from './barang-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangDetailPageRoutingModule
  ],
  declarations: [BarangDetailPage]
})
export class BarangDetailPageModule {}
