import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Plug-ins
import { NativeStorage } from '@ionic-native/native-storage';

// Env
import { environment } from './../../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private options: any;

  constructor(private http: HttpClient, private storage: NativeStorage) { }

  private setHeaders(): Promise<void> {

    return this.storage.getItem('user')
    .then((resp: any) => {
      this.options = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + resp.token,
          'Content-Type': 'application/json'
        })
      };
      console.log('HTTP Options: ', this.options);
    });
  }

  public 
}
