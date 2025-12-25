import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shose } from './shose';

describe('Shose', () => {
  let component: Shose;
  let fixture: ComponentFixture<Shose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
