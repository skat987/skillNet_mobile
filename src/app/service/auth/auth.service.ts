import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Plug-ins
import { NativeStorage } from '@ionic-native/native-storage';

// Env
import { environment } from './../../../environments/environment';
const _API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: NativeStorage) {
    console.log('Authentication service on !');
  }

  public login(loginData: any): Observable<any> {
    return this.http.post(_API_URL + 'login', loginData)
    .pipe(map((user: any) => {
      if (user && user.token) {
        this.storage.setItem('user', user)
        .then(() => console.log('Stored item !', user))
        .catch((e) => console.log('Error storing item !', e));
      }
      return user;
    }));
  }

  public logout(): Promise<any> {
    return this.storage.getItem('user')
    .then((user: any) => {
      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + user.token
      });
      return this.http.get(_API_URL + 'logout', { headers: headers })
      .toPromise()
      .then((resp: any) => {
        console.log('logout response', resp);
        this.storage.remove('user');
        return resp;
      });
    })
    .catch((e) => console.log('Error logout: ', e));
  }

  public isLogged(): boolean {
    return (this.storage.getItem('user')) ? true : false;
  }

}
