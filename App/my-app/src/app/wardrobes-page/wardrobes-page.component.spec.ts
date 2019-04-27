import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobesPageComponent } from './wardrobes-page.component';

describe('WardrobesPageComponent', () => {
  let component: WardrobesPageComponent;
  let fixture: ComponentFixture<WardrobesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardrobesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardrobesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
