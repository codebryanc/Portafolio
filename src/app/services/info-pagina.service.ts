import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // Variables
  public info: InfoPagina = new InfoPagina();
  public cargada: boolean = false;

  // Constants

  constructor(private http: HttpClient) {
    this.readJsonFile();
  }

  // Methods
  public readJsonFile() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        
        this.info = resp;
        
        console.log(resp['twitter']);
        
        let facebookProp = resp.facebook;
      });
  }

  // Functions

}
