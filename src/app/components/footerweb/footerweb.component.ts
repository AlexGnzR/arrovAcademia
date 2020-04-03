import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerweb',
  templateUrl: './footerweb.component.html',
  styleUrls: ['./footerweb.component.css']
})
export class FooterwebComponent implements OnInit {

  //Derechos
  derechosttle: String = 'Derechos de autor © 2020 @cadémia';
  //Creado
  creadottle: String = 'DevApps';
  //Condiciones  
  condicionesmaspoliticasttle: String = 'Condiciones y Política de Privacidad';

  constructor() { }

  ngOnInit(): void {
  }

}
