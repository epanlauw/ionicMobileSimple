import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ram } from 'src/app/ram.model';

@Injectable({
  providedIn: 'root'
})
export class RamsService {

  private rams: Ram[] = [
    {
      id: 'rm1',
      merek: 'Apacer',
      model: 'DDR4 PC25600 3200Mhz Dual Channel 16GB (2x8GB) - NOX RGB Aura2',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/1/6/13757756/13757756_addd3111-570b-4178-a6b1-c9423d18fb03_700_700',
      speed: 3200,
      ukuran: 16,
      stock: 30,
      harga: 1245000
    },
    {
      id: 'rm2',
      merek: 'ADATA',
      model: 'DDR4 XPG SPECTRIX D60G PC25600 3200MHz 32GB (2X16GB) Dual Channel - RGB',
      foto: 'https://www.adata.com/upload/ProductGallery/productGallery7055.jpg',
      speed: 3200,
      ukuran: 32,
      stock: 20,
      harga: 2455000
    },
    {
      id: 'rm3',
      merek: 'V-GeN',
      model: 'TsunamiX RGB-V DDR4 PC28800 3600Mhz Dual Channel 32GB',
      foto: 'https://cf.shopee.co.id/file/8e27ea5d172227ec40f8452c1ced89e8',
      speed: 3600,
      ukuran: 32,
      stock: 15,
      harga: 2418000
    }
  ]

  getAllRams(){
    return this.rams;
  }

  getRam(ramId: string){
    return this.rams.find(ram => {
      return ram.id === ramId;
    });
  }

  addRam(form: NgForm){
    const idLength: number = this.rams.length + 1;
    this.rams.push(
      {
        id: 'rm'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        speed: form.value.speed,
        ukuran: form.value.ukuran,
        stock: form.value.stock,
        harga: form.value.harga
      }
    )
  }

  deleteRam(ramId: string){
    this.rams = this.rams.filter(ram => {
      return ram.id !== ramId;
    });
  }

  editRam(form: NgForm, ramId: string){
    return {...this.rams.find(ram => {
      if(ram.id === ramId){
        ram.merek = form.value.merek,
        ram.model = form.value.model,
        ram.foto = form.value.imageUrl,
        ram.speed = form.value.speed,
        ram.ukuran = form.value.ukuran,
        ram.stock = form.value.stock,
        ram.harga = form.value.harga
      }
    })};
  }

  constructor() { }
}
