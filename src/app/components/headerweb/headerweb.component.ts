import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-headerweb',
  templateUrl: './headerweb.component.html',
  styleUrls: ['./headerweb.component.css']
})
export class HeaderwebComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    //POPUPS

    var btnAbrirPopupLog = document.getElementById('abrirpopuplogin');
    var overlaylog = document.getElementById('overlaylog');
    var popuplogin = document.getElementById('popuplogin');
    var btnCerrarPopupLog = document.getElementById('closepopuplog');

    btnAbrirPopupLog.addEventListener('click', function(){
      overlaylog.classList.add('activelogin');
      popuplogin.classList.add('activepopuplogin');
    });

    btnCerrarPopupLog.addEventListener('click', function(){
      overlaylog.classList.remove('activelogin');
      popuplogin.classList.remove('activepopuplogin');
    });

    var enlaceRegister = document.getElementById('notregisted');
    var contentedorRegister = document.getElementById('contenedorreg');
    var enlaceLogin = document.getElementById('registed');
    var contenedorLogin = document.getElementById('contenedorlog');

    enlaceRegister.addEventListener('click', function(){
      contenedorLogin.classList.replace('contenedor-login','contenedor-login-oculto');
      contentedorRegister.classList.replace('contenedor-register','contenedor-register-visible');
    });

    enlaceLogin.addEventListener('click', function(){
      contentedorRegister.classList.replace('contenedor-register-visible', 'contenedor-register');
      contenedorLogin.classList.replace('contenedor-login-oculto', 'contenedor-login');
    })
  }
}
