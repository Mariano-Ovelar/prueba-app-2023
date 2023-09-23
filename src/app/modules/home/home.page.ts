import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private authSvc: AuthService) {}

  ngOnInit() {}
  async salir() {
    this.authSvc
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/auth/login');
      })
      .catch((err) => console.log(err));
  }
}
