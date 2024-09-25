import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email2Component } from './email-2.component';

describe('Email2Component', () => {
  let component: Email2Component;
  let fixture: ComponentFixture<Email2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Email2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Email2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
