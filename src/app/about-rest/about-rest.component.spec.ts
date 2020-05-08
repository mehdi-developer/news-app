import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRestComponent } from './about-rest.component';

describe('AboutRestComponent', () => {
  let component: AboutRestComponent;
  let fixture: ComponentFixture<AboutRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
