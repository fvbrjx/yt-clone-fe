import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-upload-dialog',
  templateUrl: './video-upload-dialog.component.html',
  styleUrls: ['./video-upload-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoUploadDialogComponent {
  log(event:any) {
    console.log("prova");
    
  }
}
