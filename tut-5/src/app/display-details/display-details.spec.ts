import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetails } from './display-details';

describe('DisplayDetails', () => {
  let component: DisplayDetails;
  let fixture: ComponentFixture<DisplayDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
