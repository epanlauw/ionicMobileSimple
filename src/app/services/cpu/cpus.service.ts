import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cpu } from 'src/app/cpu.model';

@Injectable({
  providedIn: 'root'
})
export class CpusService {

  private cpus: Cpu[] = [
    {
      id: 'cp1',
      merek: 'AMD',
      model: 'Ryzen 3 3300X',
      foto: 'http://www.jagatreview.com/wp-content/uploads/2020/05/Ryzen_3_BOX.png',
      base_clock: 3.8,
      boost_clock: 4.3,
      core: 4,
      thread: 8,
      stock: 10,
      harga: 2395000
    },
    {
      id: 'cp2',
      merek: 'AMD',
      model: 'Ryzen 5 3600XT',
      foto: 'https://s1.bukalapak.com/img/6767206292/original/AMD_Ryzen_5_2600_39Ghz_AM4.jpg',
      base_clock: 3.8,
      boost_clock: 4.5,
      core: 6,
      thread: 12,
      stock: 30,
      harga: 3885000
    },
    {
      id: 'cp3',
      merek: 'AMD',
      model: 'Ryzen 7 3800XT',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/22/2537679/2537679_5bec9a82-ea29-4f5c-bb9c-142460b04376_800_800',
      base_clock: 3.9,
      boost_clock: 4.7,
      core: 8,
      thread: 16,
      stock: 5,
      harga: 6135000
    },
    {
      id: 'cp4',
      merek: 'Intel',
      model: 'I3 9100',
      foto: 'https://www.powerplanetonline.com/cdnassets/procesador_intel_core_i3-9100_3_6_ghz_box_01_l.jpg',
      base_clock: 3.6,
      boost_clock: 4.2,
      core: 4,
      thread: 4,
      stock: 34,
      harga: 1640000
    },
    {
      id: 'cp5',
      merek: 'Intel',
      model: 'I5 9600K',
      foto: 'https://tpucdn.com/review/intel-core-i5-9600k/images/title.jpg',
      base_clock: 3.7,
      boost_clock: 4.6,
      core: 6,
      thread: 6,
      stock: 20,
      harga: 3672000
    },
    {
      id: 'cp6',
      merek: 'Intel',
      model: 'I7 9700K',
      foto: 'https://www.pricerunner.com/product/320x320/1866817306/Intel-Core-i7-9700K-3.6GHz-Socket-1151-2-Box-without-Cooler.jpg',
      base_clock: 3.6,
      boost_clock: 4.9,
      core: 8,
      thread: 8,
      stock: 10,
      harga: 5140000
    },
  ]

  constructor() { }

  getAllCpus(){
    return this.cpus;
  }

  getCpu(cpuId: string){
    return this.cpus.find(cpu => {
      return cpu.id === cpuId;
    });
  }

  addCpu(form: NgForm){
    const idLength: number = this.cpus.length + 1;
    this.cpus.push(
      {
        id: 'cp'.concat(idLength.toString()),
        merek: form.value.merek,
        model: form.value.model,
        foto: form.value.imageUrl,
        base_clock: form.value.base_clock,
        boost_clock: form.value.boost_clock,
        core: form.value.core,
        thread: form.value.thread,
        stock: form.value.stock,
        harga: form.value.harga
      }
    )
  }

  deleteCpu(cpuId: string){
    this.cpus = this.cpus.filter(cpu => {
      return cpu.id !== cpuId;
    });
  }

  editCpu(form: NgForm, cpuId: string){
    return {...this.cpus.find(cpu => {
      if(cpu.id === cpuId){
        cpu.merek = form.value.merek,
        cpu.model = form.value.model,
        cpu.foto = form.value.imageUrl,
        cpu.base_clock = form.value.base_clock,
        cpu.boost_clock = form.value.boost_clock,
        cpu.core = form.value.core,
        cpu.thread = form.value.thread,
        cpu.stock = form.value.stock,
        cpu.harga = form.value.harga
      }
    })}
  }
  
}
