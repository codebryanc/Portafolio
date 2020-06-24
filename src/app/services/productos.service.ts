import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductoFirebase } from '../interfaces/producto-firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;
  public productos: ProductoFirebase[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://udemyangular-38e59.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductoFirebase[]) => {
        this.cargando = false;
        
        this.productos = resp;

        console.log(resp);
      });
  }
}
