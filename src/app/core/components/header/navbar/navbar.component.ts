import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { AppAuthService } from 'src/app/core/services/app-auth.service';
import { VideoUploadDialogComponent } from 'src/app/features/video/components/video-upload-dialog/video-upload-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public authService: AppAuthService, private dialog:MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(VideoUploadDialogComponent, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
