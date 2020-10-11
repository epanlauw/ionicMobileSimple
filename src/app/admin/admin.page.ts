import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Barang } from '../barang.model';
import { BarangsService } from '../services/barang/barangs.service';
import { CpusService } from '../services/cpu/cpus.service';
import { GpusService } from '../services/gpu/gpus.service';
import { MotherboardsService } from '../services/motherboard/motherboards.service';
import { RamsService } from '../services/ram/rams.service';
import { AddComponent } from './component/add/add.component';
import { ModalEditComponent } from './component/modal-edit/modal-edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barangs: Barang[];
  constructor(
    private barangsService: BarangsService,
    private cpusService: CpusService,
    private gpusService: GpusService,
    private ramsService: RamsService,
    private motherboardsService: MotherboardsService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.barangs = this.barangsService.getAllBarangs();
  }

  deleteItem(barangId: string){
    if(barangId.substring(0,2) == "cp"){
      
      this.cpusService.deleteCpu(barangId);
    }
    else if(barangId.substring(0,2) == "gp"){
      this.gpusService.deleteGpu(barangId);
    }
    else if(barangId.substring(0,2) == "rm"){
      this.ramsService.deleteRam(barangId);
    }
    else if(barangId.substring(0,2) == "mb"){
      this.motherboardsService.deleteMotherboard(barangId);
    }
    this.barangsService.deleteBarang(barangId);
    this.barangs = this.barangsService.getAllBarangs();
  }

  async presentModalEdit(barangId: string){
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: {idBarang: barangId}
    });

    modal.onDidDismiss().then(resultData => {

    })

    return await modal.present();
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

  async presentAlert(barangId: string){
    const alert = await this.alertCtrl.create({
      header: 'Hapus Item',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteItem(barangId)
        }
      ]
    });
    await alert.present();
  }

}
