import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recomandation } from './recomandation';

describe('Recomandation', () => {
  let component: Recomandation;
  let fixture: ComponentFixture<Recomandation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recomandation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recomandation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
