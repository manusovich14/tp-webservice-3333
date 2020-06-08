import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { 

  }

  public obtenerNoticias(categoria: string): Observable<any> {
    // peticion por get a la api rest
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
        "x-rapidapi-key": "3dcfcb42aemsh79bd81be18e37e2p1fc9fbjsn19dcd03c655a"
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
  }
}
