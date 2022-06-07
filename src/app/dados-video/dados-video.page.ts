import { Component, OnInit } from '@angular/core';
import { IVideoAPI } from '../models/IVideoAPI.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-video',
  templateUrl: './dados-video.page.html',
  styleUrls: ['./dados-video.page.scss'],
})
export class DadosVideoPage implements OnInit {

  video: IVideoAPI;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.video = this.dadosService.pegarDados('video');
    console.log('Vídeo enviado', this.video);
  }

}
