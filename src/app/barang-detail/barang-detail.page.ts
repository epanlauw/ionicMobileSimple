import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CpusService } from '../services/cpu/cpus.service';
import { GpusService } from '../services/gpu/gpus.service';
import { MotherboardsService } from '../services/motherboard/motherboards.service';
import { RamsService } from '../services/ram/rams.service';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.page.html',
  styleUrls: ['./barang-detail.page.scss'],
})
export class BarangDetailPage implements OnInit {

  barang: any;
  id: string;

  constructor(
    public router: Router,
    private cpusService: CpusService,
    private gpusService: GpusService,
    private motherboardsService: MotherboardsService,
    private ramsService: RamsService
  ) { 
    this.id = this.router.url.substring(1);
  }

  ngOnInit() {
    if(this.router.url.substring(1,3) == "cp"){
      this.barang = this.cpusService.getCpu(this.id);
    }
    else if(this.router.url.substring(1,3) == "gp"){
      this.barang = this.gpusService.getGpu(this.id);
    }
    else if(this.router.url.substring(1,3) == "mb"){
      this.barang = this.motherboardsService.getMotherboard(this.id);
    }
    else if(this.router.url.substring(1,3) =="rm"){
      this.barang = this.ramsService.getRam(this.id);
    }
  }

  ionViewWillEnter(){
    
  }

}
