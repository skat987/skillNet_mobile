import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Plug-ins
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// Env
import { environment } from './../../../environments/environment';
const _API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options: any;

  constructor(private http: HttpClient, private storage: NativeStorage) { }

  private setHeaders(): Promise<void> {
    return this.storage.getItem('user').then((resp: any) => {
      this.options = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + resp.token,
          'Content-Type': 'application/json'
        })
      };
    }).catch(e => console.log('Error setting httpOptions: ', e));
  }

  public get(url): Promise<any> {
    return new Promise(resolve => {
      this.setHeaders().then(() => {
        this.http.get(_API_URL + url, this.options)
        .subscribe(resp => {
          console.log('data get: ', resp);
          resolve(resp);
        }, e => console.log(e));
      }).catch(e => console.log('Error "get" data: ', e));
    });
  }

  public put(url, data): Promise<any> {
    return new Promise(resolve => {
      this.setHeaders().then(() => {
        this.http.put(_API_URL + url, data, this.options)
        .subscribe(resp => resolve(resp), e => console.log(e));
      }).catch(e => console.log('Error "put" data: ', e));
    });
  }
}
