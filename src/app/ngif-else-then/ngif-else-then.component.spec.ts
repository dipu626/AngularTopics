import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifElseThenComponent } from './ngif-else-then.component';

describe('NgifElseThenComponent', () => {
  let component: NgifElseThenComponent;
  let fixture: ComponentFixture<NgifElseThenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifElseThenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifElseThenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
