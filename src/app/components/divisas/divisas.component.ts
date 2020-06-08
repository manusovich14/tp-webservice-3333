import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange.service';
import { Moneda } from 'src/app/models/moneda';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  moneda: Moneda;
  total: number = 0;
  tipo: string = '';

  constructor(private exchangeService: ExchangeService) {
    this.moneda = new Moneda();
  }

  public obtenerConversion() {
    
    this.exchangeService.obtenerConversion(this.moneda.from_type, this.moneda.from_value, this.moneda.to_type).subscribe(
      (result) => {
        this.tipo = result["to-type"];
        this.total = Math.round(result["result-float"]);
      },
      error => {
        alert("Error en la petición");
      }
    ) 
  }

  ngOnInit(): void {
  }
}
