import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private menus = [
    null,
    {
      links: []
    },
    {
      links: [
        { title: 'Accueil', url: '/teacher/formations', icon: 'home' },
        { title: 'Rapports', url: '/teacher/reports', icon: 'clipboard' },
        { title: 'Plannings', url: '/teacher/plannings', icon: 'calendar' }
      ]
    },
    {
      links: [
        { title: 'Accueil', url: '/student/dashboard', icon: 'home' },
        { title: 'Rapports', url: '/student/reports', icon: 'clipboard' },
        { title: 'Plannings', url: '/student/plannings', icon: 'calendar' },
      ]
    }
  ];

  public appPages = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.authService.getAuth().then((user: any) => {
        this.appPages = this.menus[user.user_type_id].links;
      })
      .catch(e => console.log('Error init menu: ', e));
    }
  }

  public logout(): void {
    console.log('logout_controle');
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(e => console.log('Error logout: ', e));
  }

}
