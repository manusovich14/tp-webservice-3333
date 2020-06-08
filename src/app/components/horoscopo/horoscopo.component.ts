import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  signo: string;
  informacion: string = '';
  numeroSuerte: string = '';
  rangoFechas: string = '';

  constructor(private horoscopoService: HoroscopoService) { }

  public buscarHoroscopo() {
    this.horoscopoService.obtenerHoroscopo(this.signo, "today").subscribe(
      (result) => {
        this.cargarDatos(result);
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  public cargarDatos(result) {
    this.informacion = result['description']
    this.numeroSuerte = result['lucky_number'];
    this.rangoFechas = result['date_range'];
  }

  ngOnInit(): void {
  }

}
