import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {

  @Input() idBarang: string; 

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if(this.idBarang.substring(0,2) == "cp"){
      console.log("cpu");
    }
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
