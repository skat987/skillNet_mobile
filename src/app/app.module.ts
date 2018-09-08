import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Plug-ins
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

// Components
import { MenuComponent } from './layout/menu/menu.component';

// Native components
import { RoundProgressModule } from 'angular-svg-round-progressbar';
@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    RoundProgressModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    FileTransfer,
    File,
    DocumentViewer,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
