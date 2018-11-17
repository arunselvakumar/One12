import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScrapComponent } from './profile-scrap.component';

describe('ProfileScrapComponent', () => {
  let component: ProfileScrapComponent;
  let fixture: ComponentFixture<ProfileScrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileScrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
