import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasandLoungersPageComponent } from './sofasand-loungers-page.component';

describe('SofasandLoungersPageComponent', () => {
  let component: SofasandLoungersPageComponent;
  let fixture: ComponentFixture<SofasandLoungersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofasandLoungersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofasandLoungersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
