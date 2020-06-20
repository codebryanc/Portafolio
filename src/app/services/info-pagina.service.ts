import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // Variables
  private info: any = {};
  private cargada: boolean = false;

  // Constants

  constructor(private http: HttpClient) {
    this.readJsonFile();
  }

  // Methods
  public readJsonFile() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: any) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp['twitter']);
      });
  }

  // Functions

}
