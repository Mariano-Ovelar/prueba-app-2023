import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;

  isPassword: boolean = false;
  hide: boolean = false;
  constructor() {}

  ngOnInit() {
    if (this.type == 'password') this.isPassword = true;
  }
  mostrarClave() {
    this.hide = !this.hide;
    if (this.hide) this.type = 'text';
    else {
      this.type = 'password';
    }
  }
}
