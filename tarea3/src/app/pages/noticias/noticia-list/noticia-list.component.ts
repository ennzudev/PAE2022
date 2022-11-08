import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.scss']
})
export class NoticiaListComponent implements OnInit {
  current: any = {}
  @Input('noticias') noticias: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private servicioDeNoticias: NoticiaService) { }

  ngOnInit(): void {
  }

  selectNoticia(noticia: any){
    this.current = noticia
    this.newItemEvent.emit(noticia);
  }

}