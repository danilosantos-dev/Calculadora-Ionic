import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Declaração das variaveis

    primeiroValor='';
    segundoValor='';
    resultado = '';
    conta ='';



  constructor(private alertController: AlertController) {}

    async mostrarAlert() {

    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `<strong>Valor1: </strong>  ${this.primeiroValor}
          </br> <strong>Valor2: </strong> ${this.segundoValor}
          </br> <strong>Resultado: </strong> ${this.resultado}`,
      buttons: ['OK'],
    });
      await alert.present();

  }


  async mostrarMaior() {

    const alert =  this.alertController.create({
      header: 'Resultado',
      message: `<strong>Maior: </strong> ${this.calculaMaior()}  `,
      buttons: ['OK'],
    });
        (await alert).present();
  }


  async mostrarMenor() {

    const alert =  this.alertController.create({
      header: 'Resultado',
      message: `<strong>Menor: </strong> ${this.calculaMenor()} `,
      buttons: ['OK'],
    });
        (await alert).present();
  }

  //Funcoes para calcular Maior e Menor Valor entre os campos

  calculaMaior(){
     if(this.primeiroValor > this.segundoValor){
      return this.primeiroValor;
    }else if (this.primeiroValor < this.segundoValor){
      return this.segundoValor;
    }else {
      return 'Os numeros são iguais!';
    }
  }

  calculaMenor(){
    if(this.segundoValor > this.primeiroValor){
     return this.primeiroValor;
   }else if (this.segundoValor < this.primeiroValor){
    return this.segundoValor;
   }else {
    return 'Os numeros são iguais!';
   }
 }

  //Funçôes das operações basicas

  multiplicacao(){
    this.resultado =(parseFloat(this.primeiroValor)*parseFloat(this.segundoValor)).toString();
    this.conta = 'Multiplicação';
  }
  divisao(){
    this.resultado =(parseFloat(this.primeiroValor)/parseFloat(this.segundoValor)).toString();
    this.conta = 'Divisão';
  }
  subtrair(){
    this.resultado =(parseFloat(this.primeiroValor)-parseFloat(this.segundoValor)).toString();
    this.conta = 'Subtração';
  }

  somar(){
    this.resultado =(parseFloat(this.primeiroValor)+parseFloat(this.segundoValor)).toString();
    this.conta = 'Soma';
  }

  //Função para limpar os campos

  limpar(){
    this.primeiroValor = '';
    this.segundoValor ='';
    this.resultado ='';
    this.conta ='';
  }


}
