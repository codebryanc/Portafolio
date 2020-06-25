import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductoFirebase } from '../interfaces/producto-firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;
  public productos: ProductoFirebase[] = [];
  public productosFiltado: ProductoFirebase[] = [];
  public producto: ProductoFirebase;

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://udemyangular-38e59.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoFirebase[]) => {
          
          this.productos = resp;
                  
          // for view loading
          setTimeout(() => {
            this.cargando = false;

            resolve();

          }, 250);
        });
    });    
  }

  public getProducto(producto: string) {
    return this.http.get(`https://udemyangular-38e59.firebaseio.com/productos/${producto}.json`);
  }

  public buscarProducto(termino: string) {  
    if(this.cargando === true) {
      // Cargar productos
      this.cargarProductos().then( ()=> {
        // Ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    }
    else {
      // Aplicar filtro
        this.filtrarProductos(termino);
    }
  }

  public filtrarProductos(termino: string) {
    // Primera opción
    // return this.productos.filter( producto => {
    //   return true;
    // });

    // Segunda opción
    this.productosFiltado = [];

    // para unificar la busqueda
    termino = termino.toLowerCase();

    this.productos.forEach(unProducto => {
      if(unProducto.categoria.toLowerCase().indexOf(termino) >= 0 ||
         unProducto.titulo.toLowerCase().indexOf(termino) >= 0 ) {
        
        this.productosFiltado.push(unProducto);
      }
    });
  }
}
