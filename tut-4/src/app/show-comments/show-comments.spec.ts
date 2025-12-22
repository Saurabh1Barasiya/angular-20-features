import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComments } from './show-comments';

describe('ShowComments', () => {
  let component: ShowComments;
  let fixture: ComponentFixture<ShowComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
