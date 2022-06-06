import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaVideos } from '../models/IVideoAPI.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  lingua = 'pt-BR';
  regia = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=d3eb512f6657b66408eaaceecdcb2139';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarVideos(busca: string): Observable<IListaVideos> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}$region&{this.regiao}&query=${busca}`;

    return this.http.get<IListaVideos>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}