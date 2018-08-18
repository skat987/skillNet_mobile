import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Plug-ins
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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

  public get(url): Promise<any> {
    return new Promise(resolve => {
      this.setHeaders().then(() => {
        this.http.get(apiUrl + url, this.options)
        .subscribe(resp => {
          console.log('data: ', resp);
          resolve(resp);
        }, e => { console.log(e); });
      })
      .catch(e => console.log('Error "get" data: ', e));
    });
  }

  public put(url, data): Promise<any> {
    return new Promise(resolve => {
      console.log('put controle: ', data);
      this.setHeaders().then(() => {
        this.http.put(apiUrl + url, data, this.options)
        .subscribe(resp => {
          resolve(resp);
        }, e => { console.log(e); });
      })
      .catch(e => console.log('Error "put" data: ', e));
    });
  }
}
