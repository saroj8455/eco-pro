import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcfComponent } from './rcf.component';

describe('RcfComponent', () => {
  let component: RcfComponent;
  let fixture: ComponentFixture<RcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
