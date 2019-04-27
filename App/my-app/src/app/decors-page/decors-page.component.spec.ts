import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorsPageComponent } from './decors-page.component';

describe('DecorsPageComponent', () => {
  let component: DecorsPageComponent;
  let fixture: ComponentFixture<DecorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
