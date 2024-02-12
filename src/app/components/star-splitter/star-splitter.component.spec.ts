import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSplitterComponent } from './star-splitter.component';

describe('StarSplitterComponent', () => {
  let component: StarSplitterComponent;
  let fixture: ComponentFixture<StarSplitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarSplitterComponent]
    });
    fixture = TestBed.createComponent(StarSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
