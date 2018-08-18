import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsPage } from './formations.page';

describe('FormationsPage', () => {
  let component: FormationsPage;
  let fixture: ComponentFixture<FormationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
