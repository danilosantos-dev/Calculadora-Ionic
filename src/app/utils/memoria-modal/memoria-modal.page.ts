import { Component, OnInit } from '@angular/core';
import { IMemoria } from 'src/app/models/IMemoria.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-memoria-modal',
  templateUrl: './memoria-modal.page.html',
  styleUrls: ['./memoria-modal.page.scss'],
})
export class MemoriaModalPage implements OnInit {
  memoria: IMemoria[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.memoria);
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

}
