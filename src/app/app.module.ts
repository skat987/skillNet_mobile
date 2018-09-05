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
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// Services
import { AuthService } from './service/auth/auth.service';

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
    AuthService,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
