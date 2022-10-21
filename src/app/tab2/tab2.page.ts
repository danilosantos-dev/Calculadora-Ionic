import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { IMemoria } from '../models/IMemoria.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];

  constructor(private alertController: AlertController) {}


  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  adicionarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };
      this.memoria.push(memoria);
    } else if (this.operacao != '' && this.resultado == '') {
      this.realizarOperacao();

      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };
      this.memoria.push(memoria);

    } else {
      this.presentAlert('Atenção', 'Insira uma operação!');
    }
    console.log(this.memoria);
  }

  limparMemoria(){
    const memoria: IMemoria = {
      operacao: this.operacao ,
      resultado: Number(this.resultado),
    };
     
  }


  realizarOperacao(){
  try {
    this.resultado = evaluate(this.operacao);
  } catch (err) {
    this.resultado = 'Inválido!';
  }
}

adicionarValor(valor: string){
  this.caracter = this.caracteres.includes(valor);

  //se não for caracter especial, numero recebe true e é adicionado;

  if (!this.caracter) {
    this.operacao += valor;
    this.numero = true;
  } else if (this.caracter && this.numero) {
    this.operacao += valor;
    this.numero = false;
  }

}

limparOperacao(){
  this.operacao = "";
}

limparCampos(){
  this.operacao = "";
  this.resultado = "";
}

apagarCaracter(){
  if (this.operacao.length > 0) {
    this.operacao = this.operacao.substring(0, this.operacao.length - 1);
  }

  const ultimo = this.operacao.substring(this.operacao.length, 1);
  this.caracter = this.caracteres.includes(ultimo);

  console.log(ultimo);

  // valida o ultimo caracter, se for caracter especial não se repete;

  if (!this.caracter) {
    this.numero = true;
  } else {
    this.numero = false;
  }
}


}
