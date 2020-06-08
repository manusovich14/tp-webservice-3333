import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  categoria: string;
  noticia: Noticia;
  noticias: Array<Noticia>;

  constructor(private noticiaService: NoticiasService) { 
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
  }

  public listarNoticias() {
    this.noticiaService.obtenerNoticias(this.categoria).subscribe(
      (result) => {
        //Es necesario convertir el JSON
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  ngOnInit(): void {
  }

}
