import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivrableComponent } from './delivrable.component';

describe('DelivrableComponent', () => {
  let component: DelivrableComponent;
  let fixture: ComponentFixture<DelivrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivrableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
