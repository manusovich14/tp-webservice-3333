import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private _http: HttpClient) { }

  public obtenerTraduccion(texto: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'x-rapidapi-key': '3dcfcb42aemsh79bd81be18e37e2p1fc9fbjsn19dcd03c655a',
        'useQueryString': 'true'
      })
    };
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", {source: 'en', q: texto, target: 'es'} , httpOptions);
  }
}
