import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/IVideo.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-video',
  templateUrl: './dados-video.page.html',
  styleUrls: ['./dados-video.page.scss'],
})
export class DadosVideoPage implements OnInit {

  video: IVideo;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.video = this.dadosService.pegarDados('video');
    console.log('Vídeo enviado', this.video);
  }

}
