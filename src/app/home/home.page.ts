import { Component } from '@angular/core';

import { Barang } from '../barang.model';
import { BarangsService } from '../services/barang/barangs.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barangs: Barang[];

  private list: boolean;
  private grid: boolean;

  constructor(
    private barangsService: BarangsService
  ) {}

  ngOnInit(){
    this.list = true;
    this.grid = false;
  }

  ionViewWillEnter(){
    this.barangsService.saveAllBarangs();
    this.barangs = this.barangsService.getAllBarangs();
  }

  changeGrid(){
    this.list = false;
    this.grid = true;
  }

  changeList(){
    this.list = true;
    this.grid = false;
  }
  
}
