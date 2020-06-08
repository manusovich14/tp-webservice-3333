import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/models/covid';
import { CovidTrackingService } from 'src/app/services/covid-tracking.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  _covid: Covid;
  _covidArray: Array<Covid>;

  constructor(private covidService: CovidTrackingService) {
    this._covid = new Covid();
    this._covidArray = new Array<Covid>();
    this.listarCasosCovid();
  }

  public listarCasosCovid() {
    this.covidService.obtenerListadoCovid().subscribe(
      (result) => {
        this._covidArray = new Array<Covid>();
        result['countries_stat'].forEach(element => {
          this._covid = new Covid();
          Object.assign(this._covid, element);
          this._covidArray.push(this._covid);
        });
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  ngOnInit(): void {
  }

}
