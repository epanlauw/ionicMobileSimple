import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { BarangsService } from 'src/app/services/barang/barangs.service';
import { CpusService } from 'src/app/services/cpu/cpus.service';
import { GpusService } from 'src/app/services/gpu/gpus.service';
import { MotherboardsService } from 'src/app/services/motherboard/motherboards.service';
import { RamsService } from 'src/app/services/ram/rams.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  jenis: string;
  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    
    private cpusService: CpusService,
    private gpusService: GpusService,
    private motherboardsService: MotherboardsService,
    private ramsService: RamsService,
    private barangsService: BarangsService
  ) { }

  ngOnInit() {
    
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  jenisBarang($event){
    this.jenis = $event.target.value;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    if(this.jenis == "cpu"){
      this.cpusService.addCpu(form);
      this.barangsService.saveCpu();
    }
    else if(this.jenis == "gpu"){
      this.gpusService.addGpu(form);
      this.barangsService.saveGpu();
    }
    else if(this.jenis == "motherboard"){
      this.motherboardsService.addMotherboard(form);
      this.barangsService.saveMobo();
    }
    else if(this.jenis == "ram"){
      this.ramsService.addRam(form);
      this.barangsService.saveRam();
    }
  }

  onSave(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'added new item'}, 'confirm');
      this.presentToast();
    })
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Save item',
      duration: 2000
    });
    await loading.present();

    await loading.onDidDismiss();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New item added.',
      position: 'bottom',
      color: 'success',
      duration: 2000
    });

    toast.present();
  }



}
