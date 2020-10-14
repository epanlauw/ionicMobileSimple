import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Barang } from "src/app/barang.model";

import { CpusService } from "../cpu/cpus.service";
import { GpusService } from "../gpu/gpus.service";
import { MotherboardsService } from "../motherboard/motherboards.service";
import { RamsService } from "../ram/rams.service";

@Injectable({
  providedIn: "root",
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

  saveAllBarangs() {
    const getItem = ({ id, merek, model, foto, stock, harga }) => {
      this.barangs.push({ id, merek, model, foto, stock, harga });
    };

    this.cpusService.getAllCpus().forEach(getItem);
    this.gpusService.getAllGpus().forEach(getItem);
    this.motherboardsService.getAllMotherboards().forEach(getItem);
    this.ramsService.getAllRams().forEach(getItem);
  }

  saveCpu() {
    const last: any = this.cpusService.getAllCpus()[
      this.cpusService.getAllCpus().length - 1
    ];
    this.barangs.push(last);
  }

  deleteBarang(barangId: string) {
    this.barangs = this.barangs.filter((barang) => {
      return barang.id !== barangId;
    });
  }

  editBarang(form: NgForm, barangId: string) {
    return {
      ...this.barangs.find((barang) => {
        if (barang.id === barangId) {
          (barang.merek = form.value.merek),
            (barang.model = form.value.model),
            (barang.foto = form.value.imageUrl),
            (barang.stock = form.value.stock),
            (barang.harga = form.value.harga);
        }
      }),
    };
  }

  saveGpu() {
    const last: any = this.gpusService.getAllGpus()[
      this.gpusService.getAllGpus().length - 1
    ];
    this.barangs.push(last);
  }

  saveMobo() {
    const last: any = this.motherboardsService.getAllMotherboards()[
      this.motherboardsService.getAllMotherboards().length - 1
    ];
    this.barangs.push(last);
  }

  saveRam() {
    const last: any = this.ramsService.getAllRams()[
      this.ramsService.getAllRams().length - 1
    ];
    this.barangs.push(last);
  }

  getAllBarangs() {
    return this.barangs;
  }

  getBarangsMTZ() {
    return this.barangs.filter((barang) => {
      return barang.stock > 0;
    });
  }
}
