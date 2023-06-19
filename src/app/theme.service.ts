import { isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

export enum Theme {
  DARK = 'Dark',
  LIGHT = 'Light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isServer = false;

  constructor(@Inject(PLATFORM_ID) platformID: any) {
    this.isServer = isPlatformServer(platformID);
  }
  setThemeToStorage(theme: Theme) {
    sessionStorage.setItem('theme', theme);
  }

  getCurrentTheme(): Theme {
    if (this.isServer) {
      return Theme.LIGHT;
    }
    return sessionStorage.getItem('theme') === Theme.DARK
      ? Theme.DARK
      : Theme.LIGHT;
  }
}
