import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertaiondemoComponent } from './opertaiondemo.component';

describe('OpertaiondemoComponent', () => {
  let component: OpertaiondemoComponent;
  let fixture: ComponentFixture<OpertaiondemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertaiondemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpertaiondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
