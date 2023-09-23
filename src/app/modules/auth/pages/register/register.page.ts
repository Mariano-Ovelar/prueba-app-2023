import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { Usuario } from 'src/app/core/models/usuario';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ToastOptions } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    clave: new FormControl('', [Validators.required]),
    confirmarClave: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  mensajeToast: ToastOptions;

  constructor(private authSrv: AuthService, private utilsSrv: UtilsService) {}

  ngOnInit() {
    this.confirmarClaveValida();
  }

  confirmarClaveValida() {
    this.form.controls.confirmarClave.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.clave),
    ]);
    this.form.controls.confirmarClave.updateValueAndValidity();
  }

  submit() {
    if (this.form.valid) {
      this.utilsSrv.presentLoading({
        message: 'Registrando',
      });
      this.authSrv
        .signUp(this.form.value as Usuario)
        .then((res) => {
          /*   this.authSrv.upDateUser({
            displayName: this.form.value.nombre,
            photoURL: '',
          }); */
          console.log(res.user);
          let user = {
            uid: res.user.uid,
            nombre: this.form.value.nombre,
            correo: res.user.email,
          };
          this.utilsSrv.setElementInLocalstorage('usuario', user);
          this.utilsSrv.dismissLoading();
          this.utilsSrv.routerLink('auth/login');
        })
        .catch((err) => {
          this.utilsSrv.dismissLoading();
          console.log(err);
        });
    }
  }
}
