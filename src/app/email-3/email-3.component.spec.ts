import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email3Component } from './email-3.component';

describe('Email3Component', () => {
  let component: Email3Component;
  let fixture: ComponentFixture<Email3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Email3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Email3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
