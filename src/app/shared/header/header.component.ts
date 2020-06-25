import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPaginaService,
    public router: Router) {

  }

  ngOnInit(): void { }

  buscarProducto(termino: String) {
    if(termino.length > 0) {
      this.router.navigate(['/search', termino]);
    }
  }

}