import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prouct } from './prouct';

describe('Prouct', () => {
  let component: Prouct;
  let fixture: ComponentFixture<Prouct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prouct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prouct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
