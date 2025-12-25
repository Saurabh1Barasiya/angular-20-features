import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildA } from './child-a';

describe('ChildA', () => {
  let component: ChildA;
  let fixture: ComponentFixture<ChildA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
