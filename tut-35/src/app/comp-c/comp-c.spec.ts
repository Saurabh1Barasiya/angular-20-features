import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompC } from './comp-c';

describe('CompC', () => {
  let component: CompC;
  let fixture: ComponentFixture<CompC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
