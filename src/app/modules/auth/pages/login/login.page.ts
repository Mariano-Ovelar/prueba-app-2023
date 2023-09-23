import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    clave: new FormControl('', [Validators.required]),
  });

  constructor(private authSrv: AuthService, private utilSvc: UtilsService) {}

  ngOnInit() {}
  submit() {
    if (this.form.valid) {
      this.utilSvc.presentLoading({
        message: 'Entrando',
      });
      this.authSrv
        .login(this.form.value as Usuario)
        .then(async (res) => {
          this.utilSvc.routerLink('/home');
          this.utilSvc.dismissLoading().then(() => {
            this.utilSvc.presentToast({
              message: `Bienvenido: ${this.form.controls.correo}`,
              duration: 5000,
              position: 'top',
              color: 'success',
            });
          });
        })
        .catch((err) => {
          this.utilSvc.dismissLoading().then(() => {
            this.utilSvc.presentToast({
              message: 'Revisa que tu correo y contraseña sea los correctos.',
              duration: 5000,
              position: 'top',
              color: 'danger',
            });
          });
        });
    }
  }
}
