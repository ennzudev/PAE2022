import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { Noticias } from 'src/app/shared/interfaces/noticias';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private noticia: Noticia = {
    title: '',
    description: '',
    url: '',
    urlToImage: ''
  }

  constructor(private http: HttpClient) { }

  getNoticias(q: string): Observable<any> {
    const url = `${environment.apiUrl}everything?q=${q}&sortBy=publishedAt&apiKey=${environment.apiKey}`;
    return this.http.get(url)
  }

  setCurrentNoticia(noticia: Noticia) {
    this.noticia = noticia;
    localStorage.setItem('noticia', JSON.stringify(noticia))
  }

  getCurrentNoticia(): Noticia{
    if(!this.noticia.title){
      const noticia = localStorage.getItem('noticia') || "{}";
      this.noticia = JSON.parse(noticia);
    }
    return this.noticia;
  }
/*
  getCurrentNoticias(): Noticias{
    if(!this.noticias.title){
      const noticias = localStorage.getItem('noticias') || "{}";
      this.noticias = JSON.parse(noticias);
    }
    return 'this.noticias';
  }  */
}
