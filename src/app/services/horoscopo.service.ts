import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {
  
  constructor(private _http: HttpClient) { }

  public obtenerHoroscopo(signo: string, day: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "3dcfcb42aemsh79bd81be18e37e2p1fc9fbjsn19dcd03c655a",
        "Content-Type": "application/json",
        "useQueryString": "true"
      })
    };
    
    return this._http.post("https://aztro.sameerkumar.website/?sign="+signo+"&day="+day, httpOptions);
  }
}
