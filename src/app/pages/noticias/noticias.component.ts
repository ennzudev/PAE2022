import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  
  resultados: boolean = false
  noticias: any = []
  cargando: boolean = false
  search: any = ''
  lastSearch: string = ''
  current: any ={};
  buscando: any = ''
  result: string = ''
  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('noticias') == null){
    } else if(sessionStorage.getItem('noticias') != null){
      this.search = sessionStorage.getItem('noticias');
      this.buscar()
    }
  }
  
  buscar(el?: HTMLElement){
    if (el){
      el.scrollIntoView();
    }
    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe({
      next: (response) => {
        //SAVES WORD INTO STORAGE
        sessionStorage.setItem('noticias', this.search);
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
        this.resultados = true;
        this.search = '';
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  }

  selectNoticia(noticia: any){
    this.current = noticia;
    this.noticiaService.setCurrentNoticia(noticia);
  }

  clearCurrent(){
    this.current = {};
  }

  rellenar(){
    this.cargando = true;
    this.noticiaService.getNoticias(this.search).subscribe({
      next: (response) => {
        localStorage.setItem('noticias', this.search);
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
        this.resultados = true;
        this.search = '';
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  }

  actualizarFavoritos(){
    
  }
  

}
