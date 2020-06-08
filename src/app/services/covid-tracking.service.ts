import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidTrackingService {

  constructor(private _http: HttpClient) { }

  public obtenerListadoCovid(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "3dcfcb42aemsh79bd81be18e37e2p1fc9fbjsn19dcd03c655a",
      })
    };

    return this._http.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", httpOptions);
  }

}
