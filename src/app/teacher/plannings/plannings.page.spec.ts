import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningsPage } from './plannings.page';

describe('PlanningsPage', () => {
  let component: PlanningsPage;
  let fixture: ComponentFixture<PlanningsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
