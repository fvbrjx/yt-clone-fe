import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
const modules = [MatDialogModule, MatDividerModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class MaterialModule {}
