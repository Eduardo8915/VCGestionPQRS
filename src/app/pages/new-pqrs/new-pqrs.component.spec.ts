import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPQRSComponent } from './new-pqrs.component';

describe('NewPQRSComponent', () => {
  let component: NewPQRSComponent;
  let fixture: ComponentFixture<NewPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
