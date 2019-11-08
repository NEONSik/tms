import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForDeveloperComponent } from './header-for-developer.component';

describe('HeaderForDeveloperComponent', () => {
  let component: HeaderForDeveloperComponent;
  let fixture: ComponentFixture<HeaderForDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
