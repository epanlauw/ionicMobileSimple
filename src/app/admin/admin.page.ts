import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Barang } from '../barang.model';
import { BarangsService } from '../services/barang/barangs.service';
import { AddComponent } from './component/add/add.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barangs: Barang[];
  constructor(
    private barangsService: BarangsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.barangs = this.barangsService.getAllBarangs();
  }

  async presentModalAdd(){
    const modal = await this.modalCtrl.create({
      component: AddComponent
    });

    modal.onDidDismiss().then(resultData => {
      this.barangs = this.barangsService.getAllBarangs();
    });

    return await modal.present();
  }

}
