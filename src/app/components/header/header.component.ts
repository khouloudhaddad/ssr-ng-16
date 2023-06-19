import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { ThemeService, Theme } from 'src/app/theme.service';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTheme: Theme = Theme.LIGHT;
  currentThemeIcon = 'icon-moon';
  user: User | null = null;

  @Input()
  pageTitle = '';

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.initialiseTheme();
    this.auth.user$.subscribe((user: User | null) => {
      this.user = user;
    });
  }

  initialiseTheme(){
    this.currentTheme = this.themeService.getCurrentTheme();    
    if(this.currentTheme === Theme.LIGHT){
      this.currentThemeIcon = 'icon-moon';
    }
    if(this.currentTheme === Theme.DARK){
      this.currentThemeIcon = 'icon-sun';
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  changeTheme(){
    if(this.currentTheme === Theme.LIGHT){
      this.themeService.setThemeToStorage(Theme.DARK);
      this.currentTheme = Theme.DARK;
      this.currentThemeIcon = 'icon-sun';
      this.renderer.addClass(document.body, 'dark-theme');
    }
    else {
      this.themeService.setThemeToStorage(Theme.LIGHT);
      this.currentTheme = Theme.LIGHT;
      this.currentThemeIcon = 'icon-moon';
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  logout(){
    this.auth.signout();
  }

}
