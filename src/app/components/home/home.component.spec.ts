import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';

const MockAngularFireStore = {
  collection: () => ({valueChanges: () => of([]), get: () => of([])}),
  doc: () => ({update: jasmine.createSpy(), delete: jasmine.createSpy()})
};

const MockAuthService = {
  user$: of({uid: 'abcd'})
};

const MockBreakpointObserver = {
  isMatched: () => false
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: AngularFirestore, useValue: MockAngularFireStore},
        {provide: AuthService, useValue: MockAuthService },
        {provide: BreakpointObserver, useValue: MockBreakpointObserver }
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
