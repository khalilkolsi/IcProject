import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMPVComponent } from './cmpv.component';

describe('CMPVComponent', () => {
  let component: CMPVComponent;
  let fixture: ComponentFixture<CMPVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMPVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
