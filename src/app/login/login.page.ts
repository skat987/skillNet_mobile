import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { AuthService } from './../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private redirect = [null, '/admin', '/teacher/formations', '/student/dashboard'];

  public loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.authService.getAuth().then((user: any) => {
        this.router.navigate([this.redirect[user.user_type_id]]);
      })
      .catch(e => console.log('Error storage user: ', e));
    }
  }

  public doLogin(): void {
    this.authService.login(this.loginData)
    .subscribe((user: any) => {
      console.log('login_data: ', user);
      this.router.navigate([this.redirect[user.user_type_id]]);
    },
    e => console.log('login_error: ', e));
  }

}
