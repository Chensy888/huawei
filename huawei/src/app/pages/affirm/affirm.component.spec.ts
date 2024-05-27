import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmComponent } from './affirm.component';

describe('AffirmComponent', () => {
  let component: AffirmComponent;
  let fixture: ComponentFixture<AffirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
