import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoviesShortComponent } from './user-movies-short.component';

describe('UserMoviesShortComponent', () => {
  let component: UserMoviesShortComponent;
  let fixture: ComponentFixture<UserMoviesShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoviesShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoviesShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
