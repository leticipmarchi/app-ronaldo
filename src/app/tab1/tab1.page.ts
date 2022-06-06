import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IVideo } from '../models/IVideo.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Galeria';

  listaVideos: IVideo[] = [
    {
      nome: 'a GAMBIARRA mais INÚTIL que já foi feita!',
      canal: 'República Coisa de Nerd',
      tempo: '10 min',
      imagem: 'https://i.ytimg.com/vi/iwMTV-03dsw/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDszwZH80HtWWl05qz8usKqRxll0A',
      pagina: '/gambiarra'
    },
    {
      nome: 'DOGO ARGENTINO, O MAIS EFICIENTE PARA GUARDA! | RICHARD RASMUSSEN',
      canal: 'Richard Rasmussen',
      tempo: '28 min',
      imagem: 'https://i.ytimg.com/vi/QLWC4D7XO0E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDn4p2x7lPVEiUP52eNREfrl0u5hQ',
      pagina: '/dogo'
    },
    {
      nome: 'VOCÊ NÃO PODE DEIXAR DE VISITAR A MEGACIDADE DO BRASIL | Principais atrações de São Paulo',
      canal: 'Alina Mcleod',
      tempo: '12 min',
      imagem: 'https://i.ytimg.com/vi/xZ_TIvshIkY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4i4qSGoiRqhdRKbYvqWpwUjecsg',
      pagina: '/sao-paulo'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirVideo(video: IVideo) {
    this.dadosService.guardarDados('video', video);
    this.route.navigateByUrl('/dados-video');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Vídeo adicionado ao favoritos!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
