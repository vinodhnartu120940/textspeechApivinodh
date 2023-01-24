import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TexttoSpeechComponent } from './textto-speech/textto-speech.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AngMusicPlayerModule } from  'ang-music-player';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    TexttoSpeechComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AngMusicPlayerModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
