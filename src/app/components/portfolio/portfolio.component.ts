import { PortfolioLayerComponent } from './../portfolio-layer/portfolio-layer.component';
import { Component, ComponentRef, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgSrc: string = '';
  getSrc(src: string): void {
    this.imgSrc = src;
  }
  removeSrc() {
    this.imgSrc = '';
  }
}
