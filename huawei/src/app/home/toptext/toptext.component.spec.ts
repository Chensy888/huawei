import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptextComponent } from './toptext.component';

describe('ToptextComponent', () => {
  let component: ToptextComponent;
  let fixture: ComponentFixture<ToptextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToptextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToptextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
