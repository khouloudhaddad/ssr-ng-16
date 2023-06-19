import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth.service';
import { HeaderComponent } from './header.component';
import { ThemeService, Theme } from 'src/app/theme.service';
import { of } from 'rxjs';

const MockAuthService = {
  user$: of({uid: 'abcd'})
};

const MockThemeService = {
  getCurrentTheme: () => Theme.LIGHT,
  setThemeToStorage: jasmine.createSpy()
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: AuthService, useValue: MockAuthService},
        { provide: ThemeService, useValue: MockThemeService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
