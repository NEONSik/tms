import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForTesterComponent } from './header-for-tester.component';

describe('HeaderForTesterComponent', () => {
  let component: HeaderForTesterComponent;
  let fixture: ComponentFixture<HeaderForTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
