import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
Observable


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private _http: HttpClient) { }

  public obtenerConversion(fromType: string, fromValue: string, toType: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
        "x-rapidapi-key": "3dcfcb42aemsh79bd81be18e37e2p1fc9fbjsn19dcd03c655a",
        'useQueryString': 'true'
      })
    };

    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", { 'from-value': fromValue,'from-type': fromType,  'to-type': toType }, httpOptions);
  }
}
