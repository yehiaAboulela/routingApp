import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSplitterDarkComponent } from './star-splitter-dark.component';

describe('StarSplitterDarkComponent', () => {
  let component: StarSplitterDarkComponent;
  let fixture: ComponentFixture<StarSplitterDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarSplitterDarkComponent]
    });
    fixture = TestBed.createComponent(StarSplitterDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
