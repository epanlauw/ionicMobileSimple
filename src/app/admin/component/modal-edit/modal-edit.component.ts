import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BarangsService } from 'src/app/services/barang/barangs.service';
import { CpusService } from 'src/app/services/cpu/cpus.service';
import { GpusService } from 'src/app/services/gpu/gpus.service';
import { MotherboardsService } from 'src/app/services/motherboard/motherboards.service';
import { RamsService } from 'src/app/services/ram/rams.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {

  @Input() idBarang: string; 
  barang: any;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private cpusService: CpusService,
    private gpusService: GpusService,
    private motherboardsService: MotherboardsService,
    private ramsService: RamsService,
    private barangsService: BarangsService
  ) { }

  ngOnInit() {
    if(this.idBarang.substring(0,2) == "cp"){
      this.barang = this.cpusService.getCpu(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "gp"){
      this.barang = this.gpusService.getGpu(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "mb"){
      this.barang = this.motherboardsService.getMotherboard(this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "rm"){
      this.barang = this.ramsService.getRam(this.idBarang);
    }
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSubmit(form: NgForm){
    if(this.idBarang.substring(0,2) == "cp"){
      this.cpusService.editCpu(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "gp"){
      this.gpusService.editGpu(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "mb"){
      this.motherboardsService.editMotherboard(form, this.idBarang);
    }
    else if(this.idBarang.substring(0,2) == "rm"){
      this.ramsService.editRam(form, this.idBarang);
    }
    this.barangsService.editBarang(form, this.idBarang);
    this.onEdit();
  }

  onEdit(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'edited item'}, 'confirm');
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Edit Item...',
      duration: 1000
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  async presentAlert(form: NgForm){
    const alert = await this.alertCtrl.create({
      header: 'Edit Item',
      message: 'Apakah yakin ingin mengedit?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => this.onSubmit(form)
        }
      ]
    });
    await alert.present();
  }
  

}
