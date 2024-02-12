import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-layer',
  templateUrl: './portfolio-layer.component.html',
  styleUrls: ['./portfolio-layer.component.css'],
})
export class PortfolioLayerComponent {
  @Input() srcFromParent: string = '';
}
