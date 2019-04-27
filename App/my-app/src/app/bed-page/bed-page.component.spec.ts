import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedPageComponent } from './bed-page.component';

describe('BedPageComponent', () => {
  let component: BedPageComponent;
  let fixture: ComponentFixture<BedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
