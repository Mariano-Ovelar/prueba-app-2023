import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomInputComponent],
  exports: [CustomInputComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
})
export class CustomInputModule {}
