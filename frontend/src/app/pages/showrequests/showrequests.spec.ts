import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showrequests } from './showrequests';

describe('Showrequests', () => {
  let component: Showrequests;
  let fixture: ComponentFixture<Showrequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showrequests],
    }).compileComponents();

    fixture = TestBed.createComponent(Showrequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
