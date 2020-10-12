import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Motherboard } from 'src/app/motherboard.model';

@Injectable({
  providedIn: 'root'
})
export class MotherboardsService {

  private motherboards: Motherboard[] = [
    {
      id: 'mb1',
      merek: 'Asrock',
      model: 'Z390 Phantom Gaming 9',
      foto: 'https://www.asrock.com/mb/photo/Z390%20Phantom%20Gaming%209(M1).png',
      chipset: 'LGA 1151',
      merek_proci: 'Intel',
      stock: 30,
      harga: 4395000
    },
    {
      id: 'mb2',
      merek: 'ASUS',
      model: 'ROG Maximus XI Hero',
      foto: 'https://www.asus.com/media/global/products/VEK07QXXVVHw8GI6/P_setting_000_1_90_end_500.png',
      chipset: 'LGA 1151',
      merek_proci: 'Intel',
      stock: 25,
      harga: 5645000
    },
    {
      id: 'mb3',
      merek: 'Biostar',
      model: 'X470MH',
      foto: 'https://www.biostar.com.tw/picture/Review/383/b20190823.png',
      chipset: 'AM4',
      merek_proci: 'AMD',
      stock: 35,
      harga: 1150000
    },
    {
      id: 'mb4',
      merek: 'MSI',
      model: 'X570-A Pro',
      foto: 'https://asset.msi.com/resize/image/global/product/product_10_20190705101438_5d1eb28e858fb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
      chipset: 'AM4',
      merek_proci: 'AMD',
      stock: 25,
      harga: 2700000
    },
  ]

  constructor() { }

  getAllMotherboards(){
    return this.motherboards;
  }

  getMotherboard(motherboardId: string){
    return this.motherboards.find(motherboard => {
      return motherboard.id === motherboardId;
    });
  }

  addMotherboard(form: NgForm){
    const idLength: number = this.motherboards.length + 1;
    this.motherboards.push(
      {
        id: 'mb'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        chipset: form.value.chipset,
        merek_proci: form.value.merek_proci,
        stock: form.value.stock,
        harga: form.value.harga
      }
    )
  }

  deleteMotherboard(motherboardId: string){
    this.motherboards = this.motherboards.filter(motherboard => {
      return motherboard.id !== motherboardId;
    })
  }

  editMotherboard(form: NgForm, motherboardId: string){
    return {...this.motherboards.find(motherboard => {
      if(motherboard.id === motherboardId){
        motherboard.merek = form.value.merek,
        motherboard.model = form.value.model,
        motherboard.foto = form.value.imageUrl,
        motherboard.chipset = form.value.chipset,
        motherboard.merek_proci = form.value.merek_proci,
        motherboard.stock = form.value.stock,
        motherboard.harga = form.value.harga
      }
    })};
  }
}
