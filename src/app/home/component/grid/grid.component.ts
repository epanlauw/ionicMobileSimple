import { Component, Input, OnInit } from '@angular/core';
import { Barang } from 'src/app/barang.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {

  @Input() barangs: Barang[];

  constructor() { }

  ngOnInit() {}

}
