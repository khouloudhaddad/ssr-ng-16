import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

const MockAngularFireAuth = {
  onAuthStateChanged: () => ({uid: 'abcd'}),
  signInWithPopup: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: AngularFireAuth, useValue: MockAngularFireAuth}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
