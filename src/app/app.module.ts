import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AuthModule} from '@auth0/auth0-angular'
import { environment as env } from 'src/environments/environment';
import { VideoUploadDialogComponent } from './features/video/components/video-upload-dialog/video-upload-dialog.component';
import { MaterialModule } from './shared/material/material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
VideoUploadDialogComponent
@NgModule({
  declarations: [AppComponent, VideoUploadDialogComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    MaterialModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
