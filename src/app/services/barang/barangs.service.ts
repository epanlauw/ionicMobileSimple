import { Injectable } from '@angular/core';

import { Barang } from 'src/app/barang.model';

import { CpusService } from '../cpu/cpus.service';
import { GpusService } from '../gpu/gpus.service';
import { MotherboardsService } from '../motherboard/motherboards.service';
import { RamsService } from '../ram/rams.service';



@Injectable({
  providedIn: 'root'
})
export class BarangsService {

  barangs: Barang[] = [];

  constructor(
    private cpusService: CpusService,
    private motherboardsService: MotherboardsService,
    private gpusService: GpusService,
    private ramsService: RamsService
  ) {
    this.saveAllBarangs();
  }

  saveAllBarangs(){
    this.cpusService.getAllCpus().forEach(cpu => {
      this.barangs.push(
        {
          id: cpu.id,
          merek: cpu.merek,
          model: cpu.model,
          foto: cpu.foto,
          stock: cpu.stock,
          harga: cpu.harga
        }
      )
    });

    this.gpusService.getAllGpus().forEach(gpu => {
      this.barangs.push(
        {
          id: gpu.id,
          merek: gpu.merek,
          model: gpu.model,
          foto: gpu.foto,
          stock: gpu.stock,
          harga: gpu.harga
        }
      )
    });

    this.motherboardsService.getAllMotherboards().forEach(motherboard => {
      this.barangs.push(
        {
          id: motherboard.id,
          merek: motherboard.merek,
          model: motherboard.model,
          foto: motherboard.foto,
          stock: motherboard.stock,
          harga: motherboard.harga
        }
      )
    });
    
    this.ramsService.getAllRams().forEach(ram => {
      this.barangs.push(
        {
          id: ram.id,
          merek: ram.merek,
          model: ram.model,
          foto: ram.foto,
          stock: ram.stock,
          harga: ram.harga
        }
      )
    });
  }

  saveCpu(){
    const last: any =  this.cpusService.getAllCpus()[this.cpusService.getAllCpus().length - 1];
    this.barangs.push(last)
  }

  saveGpu(){
    const last: any = this.gpusService.getAllGpus()[this.gpusService.getAllGpus().length - 1];
    this.barangs.push(last);
  }

  saveMobo(){
    const last: any = this.motherboardsService.getAllMotherboards()[this.motherboardsService.getAllMotherboards().length - 1];
    this.barangs.push(last);
  }

  saveRam(){
    const last: any = this.ramsService.getAllRams()[this.ramsService.getAllRams().length - 1];
    this.barangs.push(last);
  }

  getAllBarangs(){
    return this.barangs;
  }
}
