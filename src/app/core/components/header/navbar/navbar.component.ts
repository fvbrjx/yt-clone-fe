import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppAuthService } from 'src/app/core/services/app-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor(public authService: AppAuthService) {}
 
}
