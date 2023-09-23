import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, updateProfile } from 'firebase/auth';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {}

  //========== Autenticación ==========

  login(usuario: Usuario) {
    return this.auth.signInWithEmailAndPassword(usuario.correo, usuario.clave);
  }
  signUp(usuario: Usuario) {
    return this.auth.createUserWithEmailAndPassword(
      usuario.correo,
      usuario.clave
    );
  }

  upDateUser(usuario: any) {
    const auth = getAuth();
    return updateProfile(auth.currentUser, usuario);
  }

  async signOut() {
    await this.auth.signOut();
  }
}
