import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductosFirebase } from '../interfaces/producto-firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://udemyangular-38e59.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductosFirebase[]) => {
        this.cargando = false;
        console.log(resp);
      });
  }
}
