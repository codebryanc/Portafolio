import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from 'src/app/interfaces/producto-detalle.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public id: string;
  public currentItem : ProductoDetalle = null;
  
  constructor(private route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros)=> {
      this.id = parametros["id"];
      this.productosService.getProducto(this.id)
        .subscribe((producto: ProductoDetalle) => {
          console.log(producto);
          this.currentItem = producto;
        });
    });
  }

}
