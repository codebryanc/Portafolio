import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { InfoPagina } from '../interfaces/info-pagina.interface';
import { EquipoFirebase } from '../interfaces/equipo-firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // Url
  private jsonInfo = 'assets/data/data-pagina.json';
  private urlFirebase = 'https://udemyangular-38e59.firebaseio.com/equipo.json';

  // Info
  public info: InfoPagina;
  public cargada: boolean = false;
  
  // Equipo
  public equipo: EquipoFirebase[] = [];
  public cargadoEquipo: boolean = false;

  // Constants
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  // Methods
  public cargarInfo() {
    this.http.get(this.jsonInfo)
      .subscribe((resp: InfoPagina) => {

        // For this service
        this.cargada = true;
        this.info = resp;
        
        // only for test proposal
        let twitter = resp['twitter'];
        let facebookProp = resp.facebook;
    });
  }

  private cargarEquipo() {
    this.http.get(this.urlFirebase)
      .subscribe((resp: EquipoFirebase[]) => {

        this.cargadoEquipo = true;

        this.equipo = resp;
    });
  }
}
