import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeilightCardComponent } from './heilight-card.component';

describe('HeilightCardComponent', () => {
  let component: HeilightCardComponent;
  let fixture: ComponentFixture<HeilightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeilightCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeilightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
