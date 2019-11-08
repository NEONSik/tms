import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForProjectmanagerComponent } from './header-for-projectmanager.component';

describe('HeaderForProjectmanagerComponent', () => {
  let component: HeaderForProjectmanagerComponent;
  let fixture: ComponentFixture<HeaderForProjectmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForProjectmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForProjectmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
