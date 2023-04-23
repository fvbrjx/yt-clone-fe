import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {HeaderComponent} from './components/header/header.component'
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
