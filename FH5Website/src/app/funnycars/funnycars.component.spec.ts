import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnycarsComponent } from './funnycars.component';

describe('FunnycarsComponent', () => {
  let component: FunnycarsComponent;
  let fixture: ComponentFixture<FunnycarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnycarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnycarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
