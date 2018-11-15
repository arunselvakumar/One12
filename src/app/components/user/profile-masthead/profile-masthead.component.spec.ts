import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMastheadComponent } from './profile-masthead.component';

describe('ProfileMastheadComponent', () => {
  let component: ProfileMastheadComponent;
  let fixture: ComponentFixture<ProfileMastheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMastheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
