import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Gpu } from "src/app/gpu.model";

@Injectable({
  providedIn: "root",
})
export class GpusService {
  private gpus: Gpu[] = [
    {
      id: "gp1",
      merek: "Gigabyte",
      model: "Radeon™ RX VEGA 56 GAMING OC 8G",
      foto:
        "https://static.gigabyte.com/Product/3/6483/2017121517132494_big.png",
      stock: 13,
      harga: 5305000,
    },
    {
      id: "gp2",
      merek: "Powercolor",
      model: "Radeon™ VII 16GB HBM2",
      foto: "https://www.powercolor.com/_upload/images//1901241530430.png",
      stock: 4,
      harga: 11200000,
    },
    {
      id: "gp3",
      merek: "Digital Alliance",
      model: "DA RTX 2070 SUPER JETSTREAM 8GB GDDR6 256BIT",
      foto:
        "https://www.digitalalliance.co.id/wp-content/uploads/2019/03/RTX2070SJ_01.jpg",
      stock: 11,
      harga: 7890000,
    },
    {
      id: "gp4",
      merek: "MSI",
      model: "GeForce RTX 2080 SUPER™ GAMING X TRIO",
      foto:
        "https://asset.msi.com/resize/image/global/product/product_3_20190722133238_5d354a7644999.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      stock: 2,
      harga: 10660000,
    },
  ];

  constructor() {}

  getAllGpus() {
    return this.gpus;
  }

  getGpu(gpuId: string) {
    return this.gpus.find((gpu) => {
      return gpu.id === gpuId;
    });
  }

  addGpu(form: NgForm) {
    const idLength: number = this.gpus.length + 1;
    const { merek, model, stock, harga, imageUrl } = form.value;

    this.gpus.push({
      id: "gp".concat(idLength.toString()),
      foto: imageUrl,
      merek,
      model,
      stock,
      harga,
    });
  }

  deleteGpu(gpuId: string) {
    this.gpus = this.gpus.filter((gpu) => {
      return gpu.id !== gpuId;
    });
  }

  editGpu(form: NgForm, gpuId: string) {
    return {
      ...this.gpus.find((gpu) => {
        if (gpu.id === gpuId) {
          (gpu.merek = form.value.merek),
            (gpu.model = form.value.model),
            (gpu.foto = form.value.imageUrl),
            (gpu.stock = form.value.stock),
            (gpu.harga = form.value.harga);
        }
      }),
    };
  }
}
