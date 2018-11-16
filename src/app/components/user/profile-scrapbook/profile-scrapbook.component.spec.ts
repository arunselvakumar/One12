import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScrapbookComponent } from './profile-scrapbook.component';

describe('ProfileScrapbookComponent', () => {
  let component: ProfileScrapbookComponent;
  let fixture: ComponentFixture<ProfileScrapbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileScrapbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScrapbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
