import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-todo';
  pageTitle = 'Todo';

  constructor(
    private auth: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'icon-check',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.baseUrl}/assets/images/icon-check.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'icon-cross',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.baseUrl}/assets/images/icon-cross.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'icon-moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.baseUrl}/assets/images/icon-moon.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'icon-sun',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.baseUrl}/assets/images/icon-sun.svg`
      )
    );
  }

  ngOnInit() {
    this.auth.initialise();
  }

  changePageHeader() {
    this.pageTitle = this.router.url === '/login' ? 'Login' : 'Todo';
  }
}
