import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/auth.service';
import { AddTodoComponent } from './add-todo.component';
import { of } from 'rxjs';

const MockAngularFireStore = {
  collection: () => ({valueChanges: () => of([]), get: () => of([])}),
  doc: () => ({update: jasmine.createSpy(), delete: jasmine.createSpy()})
};

const MockAuthService = {
  user$: of({uid: 'abcd'})
};

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      providers: [
        {provide: AngularFirestore, useValue: MockAngularFireStore},
        {provide: AuthService, useValue: MockAuthService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
