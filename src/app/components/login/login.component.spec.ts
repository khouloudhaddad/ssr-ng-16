import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth.service';
import { LoginComponent } from './login.component';

const MockAuthService = {
  signInWithEmailPassword: () => Promise.resolve(),
  signUpWithEmailPassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),

};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: MockAuthService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
