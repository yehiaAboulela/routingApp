import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLayerComponent } from './portfolio-layer.component';

describe('PortfolioLayerComponent', () => {
  let component: PortfolioLayerComponent;
  let fixture: ComponentFixture<PortfolioLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioLayerComponent]
    });
    fixture = TestBed.createComponent(PortfolioLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
